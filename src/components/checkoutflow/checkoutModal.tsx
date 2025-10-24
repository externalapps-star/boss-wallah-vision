import React, { useEffect, useState } from 'react'
import {
  Drawer,
  Button,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import BannerContent from './bannerContent'
import PurchaseDetails from './couponflow/PurchaseDetails'
import CustomizedSteppers from './HorizontalStepper'
import CheckOutCard from './CheckOutCard'
import InitialDetails from './addDetails/initialDetails'
import EmailAndMobileDetails from './addDetails/EmailAndMobileDetails'
import ApplyCoupon from './couponflow/ApplyCoupon'
import PaymentFailed from './paymentDetails/PaymentFailed'
import Payment from './paymentDetails/Payment'
import StartLearningNow from './checkoutDone/StartLearningNow'
import { useAppDispatch } from '@/redux/hooks'
import { fetchActiveStatus } from '@/redux/thunks/courseDetailsThunk'
import Cookies from 'js-cookie'
import { getAuth } from 'firebase/auth'
import app from '@/services/firebase/firebase.init'
import { fetchUserData } from '@/redux/thunks/loginDetailsThunks'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
interface CheckOutModalProps {
  isOpen: boolean
  handleCheckoutModal: (open: boolean) => void
}

const CheckOutModal: React.FC<CheckOutModalProps> = ({
  isOpen,
  handleCheckoutModal,
}) => {
  const dispatch = useAppDispatch()
  const [activeStep, setActiveStep] = useState(0)
  const [currentPage, setCurrentPage] = useState('Purchase')
  const [discountPercentage, setDiscountPercentage] = useState('')
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const steps = ['Confirm purchase', 'Add details', 'Complete payment']
  const { loading } = useSelector((state: RootState) => state.payment)

  const toggleDrawer = (open: boolean): (() => void) => {
    return async () => {
      if (
        currentPage === 'Start Learning Now' ||
        currentPage === 'Payment Failed'
      ) {
        let mem_id = Cookies.get('mem_id') || '0'
        const auth = getAuth(app)
        const idToken = await auth.currentUser?.getIdToken(true)

        // newly updated code

        if (mem_id && mem_id !== '0') {
          const userData = await dispatch(
            fetchUserData(idToken as string, Number(mem_id)),
          )

          Cookies.set(
            'active_packages',
            userData?.subscription_status ? '1' : '2',
          )
        }

        const activePackage = await dispatch(
          fetchActiveStatus(idToken as string, mem_id, '24'),
        )
        if (
          !Cookies.get('active_packages') ||
          Cookies.get('active_packages') === '2'
        ) {
          Cookies.set('active_packages', activePackage || '2')
        }
      }

      handleCheckoutModal(open)
      if (!open) {
        window.location.reload()
      }
    }
  }

  // const handleChoosePlan = () => {
  //   onCloseModal()
  //   toggleDrawer(true)
  // }

  const handlePage = (page: string, activeStepper: number) => {
    setCurrentPage(page)
    setActiveStep(activeStepper)
    return true
  }

  const applyCouponCallBack = (percentage: string) => {
    setDiscountPercentage(percentage)
  }

  return (
    <>
      <Drawer
        disableEscapeKeyDown
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: isMobile ? '100vw' : '85vw',
            background: '#FEEFE9',
            borderRadius: '0px',
          },
        }}
      >
        {/* Drawer content */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            color: '#fff',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              padding: {
                xs: '4px 14px',
                md: '8px 40px',
              },
              justifyContent: 'space-between',
              borderBottom: '1px solid #F15F22',
              position: 'sticky',
              top: 0,
              zIndex: 1000,
              background: '#fdf0e9',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <IconButton onClick={toggleDrawer(false)} className="close-icon">
                <CloseIcon sx={{ color: '#1d1d1e' }} />
              </IconButton>
              <Typography
                component="h2"
                sx={{
                  display: isMobile ? 'none' : 'block',
                  fontFamily: '"Fira Sans", sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '26px',
                  letterSpacing: 0,
                  color: '#1d1d1e',
                }}
              >
                {currentPage === 'Start Learning Now'
                  ? 'Start Learning Now'
                  : 'Buy course'}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: 10,
                color: '#fff',
                width: isMobile ? '90%' : '60%',
                padding: isMobile ? '10px 0' : '',
              }}
            >
              <CustomizedSteppers steps={steps} activeStep={activeStep} />
            </Box>
          </Box>

          {/* Content */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              alignItems: 'flex-start',
              padding: {
                xs: '4px 10px',
                md: '8px 40px',
              },
              justifyContent: 'space-between',
            }}
          >
            {/* Banner Poster */}
            {currentPage !== 'Start Learning Now' && isMobile
              ? (currentPage === 'Purchase' ||
                  currentPage === 'Apply Coupon') && <BannerContent />
              : currentPage !== 'Start Learning Now' && <BannerContent />}

            {/* Apply Coupon Card*/}
            {currentPage === 'Purchase' && (
              <CheckOutCard handlePage={handlePage} currentPage={currentPage}>
                <PurchaseDetails
                  toggleDrawer={toggleDrawer}
                  handlePage={handlePage}
                  discount={discountPercentage}
                />
              </CheckOutCard>
            )}

            {/* Grab Details (Name and State) redirect to login via email or mobile number */}
            {currentPage === 'Initial Details' && (
              <CheckOutCard handlePage={handlePage} currentPage={currentPage}>
                <InitialDetails handlePage={handlePage} />
              </CheckOutCard>
            )}

            {/* Login Via Email and Mobile */}
            {(currentPage === 'Email' || currentPage === 'Mobile') && (
              <CheckOutCard handlePage={handlePage} currentPage={currentPage}>
                <EmailAndMobileDetails
                  handlePage={handlePage}
                  loginTypeFE={currentPage}
                />
              </CheckOutCard>
            )}

            {/* Apply Coupon*/}
            {currentPage === 'Apply Coupon' && (
              <CheckOutCard handlePage={handlePage} currentPage={currentPage}>
                <ApplyCoupon
                  handlePage={handlePage}
                  applyCouponCallBack={applyCouponCallBack}
                />
              </CheckOutCard>
            )}

            {/* Payment */}
            {currentPage === 'Payment' && (
              <CheckOutCard handlePage={handlePage} currentPage={currentPage}>
                <Payment handlePage={handlePage} />
              </CheckOutCard>
            )}
            
            {loading && (
              <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999
              }}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2
                }}>
                  <Box sx={{
                    width: 40,
                    height: 40,
                    border: '4px solid #f3f3f3',
                    borderTop: '4px solid #3498db',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                    '@keyframes spin': {
                      '0%': { transform: 'rotate(0deg)' },
                      '100%': { transform: 'rotate(360deg)' }
                    }
                  }} />
                  <Typography>Processing payment...</Typography>
                </Box>
              </Box>
            )}

            {/* Payment Failed*/}
            {currentPage === 'Payment Failed' && (
              <CheckOutCard handlePage={handlePage} currentPage={currentPage}>
                <PaymentFailed
                  handlePage={handlePage}
                  handleCheckoutModal={handleCheckoutModal}
                  onRetryPayment={() => setCurrentPage('Payment')}
                />
              </CheckOutCard>
            )}
            {/* Start Learning Now */}
            {currentPage === 'Start Learning Now' && <StartLearningNow />}
          </Box>
        </Box>
      </Drawer>
    </>
  )
}

export default CheckOutModal
