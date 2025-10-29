import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import './payment.css'
import { useAppDispatch } from '@/redux/hooks'
import { setStartLearningDetails, setLoading } from '@/redux/slices/PaymentSlice'
import { getAuth } from 'firebase/auth'
import app from '@/services/firebase/firebase.init'
import Cookies from 'js-cookie'
import { CircularProgress, Box, Backdrop } from '@mui/material'

function PaymentForm({ handlePage }: any) {
  const auth = getAuth(app)
  const dispatch = useAppDispatch()
  const razorpayRef = useRef<any>(null)
  var rzp1: any

  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream

  const paymentScreenConfig = useSelector(
    (state: RootState) => state.payment.paymentScreenDetails,
  )
  const bearerToken = useSelector((state: RootState) => state.login.bearerToken)
  const loading = useSelector((state: RootState) => state.payment.loading)

  const paymentFailed = (response: any, rzp1: any) => {
    // handlePage('Payment Failed', 3)
    handlePage('Payment Failed', 2)
  }

  const [domLoaded, setDomLoaded] = useState(false)

  const loadScript = (src: any) => {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  const handlePaymentResponse = async (resp: any) => {
    dispatch(setLoading(true))
    try {
      const idToken = await auth.currentUser?.getIdToken(true)
      const response = await fetch(
        `https://bw-purchase-service-prod-262620024912.asia-south1.run.app/api/v1/purchase/fetch_prime_order_status_v2`,
        {
          method: 'POST',
          body: new URLSearchParams({
            mem_id: Cookies.get('mem_id') || '',
            order_id: resp?.razorpay_order_id
              ? resp?.razorpay_order_id
              : resp?.razorpay_subscription_id,
            request_from: '2',
          } as any).toString(),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${idToken}`,
          },
        },
      )

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      const res = await response.json()

      // Handle iOS WebKit message
      if ((window as any).webkit?.messageHandlers?.paymentComplete) {
        (window as any).webkit.messageHandlers.paymentComplete.postMessage({
          success: !!res?.data?.show_start_learning,
          data: res?.data,
        })
      }

      // Close Razorpay modal if it exists
      if (rzp1) {
        rzp1.close()
      }

      if (res?.data?.show_start_learning) {
        dispatch(setStartLearningDetails(res?.data?.start_learning_details))
        // handlePage('Start Learning Now', 3)
        handlePage('Start Learning Now', 2)
      } else if (res?.data?.show_payment_failed) {
        // handlePage('Payment Failed', 2)
        handlePage('Payment Failed', 1)
      }

    } catch (error) {
      console.error('Payment response error:', error)
      if (rzp1) {
        rzp1.close()
      }
      // handlePage('Payment Failed', 2)
      handlePage('Payment Failed', 1)
    } finally {
      dispatch(setLoading(false))
    }
  }

  const razorpayConfig = async () => {
    dispatch(setLoading(true))
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
      dispatch(setLoading(false))
      return
    }

    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream

    const paymentData = {
      ...paymentScreenConfig,
      callback_url: undefined,
      handler: function (response: any) {
        if (response?.razorpay_payment_id) {
              handlePaymentResponse(response)
        } else {
          // handlePage('Payment Failed', 2)
          handlePage('Payment Failed', 1)
        }
      },
    }

    const options: any = {
      ...paymentData,
      modal: {
        ondismiss: function () {
          var responseData = {
            type: 'payment_dismiss',
            message: 'payment_dismiss',
          }
          parent.postMessage(responseData, '*')
          rzp1.close()
          // handlePage('Payment Failed', 3)
          handlePage('Payment Failed', 2)
        },
        escape: false,
        backdropclose: false,
        confirmclose: false,
      },
    }

    if (isIOS) {
      options.modal.animation = false
      options.modal.ondismiss = function () {
        // handlePage('Payment Failed', 3)
        handlePage('Payment Failed', 2)
      }
    }

    rzp1 = new (window as any).Razorpay(options)
    rzp1.on('payment.failed', function (response: any) {
      paymentFailed(response, rzp1)
    })
    dispatch(setLoading(false))
    rzp1.open()
  }

  useEffect(() => {
    if (domLoaded) {
      razorpayConfig()
    }
  }, [domLoaded])

  // let { courseID, course_id } = useSelector(
  //   (state: {
  //     exploreCourses: {
  //       courseID: string
  //       course_id: string
  //     }
  //   }) => state.exploreCourses,
  // )

  if (loading) {
    return (
      <>
        <Backdrop
          sx={{ 
            color: 'transparent', 
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: 'rgba(0, 0, 0, 0)'
          }}
          open={true}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2
            }}
          >
            <CircularProgress color="inherit" />
            <Box sx={{ color: '#fff' }}>
              Processing payment...
            </Box>
          </Box>
        </Backdrop>
        <div id="razorpay_id" ref={razorpayRef}></div>
      </>
    )
  }

  return <div id="razorpay_id" ref={razorpayRef}></div>
}

export default PaymentForm
