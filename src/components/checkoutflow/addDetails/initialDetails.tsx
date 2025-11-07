import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  Box,
  Button,
  Card,
  CardContent,
  MenuItem,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
} from '@mui/material'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import CallRoundedIcon from '@mui/icons-material/CallRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import {
  setLoginType,
  setUserName,
  setUserState,
} from '@/redux/slices/loginDetailsSlice'
import { error } from 'console'
import CircularProgress from '@mui/material/CircularProgress'
import Cookies from 'js-cookie'
import { useAppDispatch } from '@/redux/hooks'
import { getAuth } from 'firebase/auth'
import app from '@/services/firebase/firebase.init'
import { fetchCreateOrderData } from '@/redux/thunks/loginDetailsThunks'
import {
  setPaymentScreenDetails,
  setStartLearningDetails,
} from '@/redux/slices/PaymentSlice'
import { setSelectedCourse } from '@/redux/slices/packageSlice'
import type { AppDispatch } from '@/redux/store'
import { create } from 'domain'
import styles from './initialDetails.module.css'
import styles2 from './EmailAndMobileDetails.module.css'

interface FormData {
  name: string
  state: string
}

interface StateData {
  state_id: number
  state_name: string
  state_status: number
  is_selected: boolean
}
interface InitialDetailsProps {
  handlePage: (page: string, activeStepper: number) => boolean
  hasActivePackage?: boolean
}

const InitialDetails: React.FC<InitialDetailsProps> = ({ handlePage, hasActivePackage = false }) => {
  const [stateList, setStateList] = useState<StateData[]>([])
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const dispatch = useDispatch()
  const loginType = useSelector((state: RootState) => state.login.loginType)
  const userName = useSelector((state: RootState) => state.login.userName)
  const userState = useSelector((state: RootState) => state.login.userState)

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      name: userName || '',
      state: userState || '',
    },
  })

  const getUserIP = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json')
      if (!response.ok) {
        throw new Error('Failed to fetch IP address')
      }
      const data = await response.json()

      return data.ip
    } catch (error) {
      console.error('Error getting IP address:', error)
      return null
    }
  }

  const memId = Cookies.get('mem_id') || ''
  const auth = getAuth(app)

  const selectedLanguage = useSelector(
    (state: RootState) => state.language.selectedLanguage,
  )
  const selectedPackageId = useSelector(
    (state: RootState) => state.package.selectedPackageId,
  )
  const selectedCourse = useSelector(
    (state: RootState) => state.package.selectedCourse,
  )
  const firebaseToken = useSelector(
    (state: RootState) => state.login.firebaseToken,
  )
  const couponState = useSelector(
    (state: RootState) => state.package.coupon,
  )

  const FirebaseToken = async (memID: string, dispatch: AppDispatch) => {
    try {
      const idToken = await auth.currentUser?.getIdToken(true)
      const res = await dispatch(
        fetchCreateOrderData(
          selectedLanguage,
          idToken as string,
          Number(memID),
          selectedPackageId,
          selectedCourse,
          handlePage,
        ),
      )

      if (res?.data?.show_payment_screen) {
        dispatch(setPaymentScreenDetails(res?.data?.payment_screen_details))
        // handlePage('Payment', 2)
        handlePage('Payment', 1)
      } else {
        if (res?.data?.show_start_learning) {
          dispatch(setStartLearningDetails(res?.data?.start_learning_details))
          // handlePage('Start Learning Now', 3)
          handlePage('Start Learning Now', 2)
        }
      }
    } catch (error: any) {
      console.error('Firebase auth error:', error.code, error.message)
    }
  }

  const redeemCoupon = async (couponCode: string, memID: string) => {
    try {
      setCouponError(null)
      const response = await fetch(
        'https://bw-purchase-service-prod-262620024912.asia-south1.run.app/api/v1/purchase/redeem_coupon_code',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            coupon_code: couponCode,
            mem_id: memID,
          }).toString(),
        }
      )

      const data = await response.json()

      if (data.status && data.data) {
        // Success - redirect to subscription page
        setIsLoading(false)
        const successData = data.data as any
        dispatch(setStartLearningDetails({
          transaction_id: successData.transaction_id || '',
          package_id: successData.package_id || '',
          package_name: successData.package_name || '',
          subscription_expiry: successData.subscription_expiry || '',
          subscription_status: successData.subscription_status || '',
        }))
        // Reload page to show updated subscription status
        window.location.reload()
      } else {
        // Error - show error message
        setCouponError(data.data?.message || 'Invalid or expired coupon code.')
        setIsLoading(false)
      }
    } catch (error) {
      console.error('Error redeeming coupon:', error)
      setCouponError('An error occurred while redeeming the coupon. Please try again.')
      setIsLoading(false)
    }
  }

  const fetchData = async () => {
    setIsLoading(true)
    const memID = Cookies.get('mem_id') || '0'
    
    // Check if coupon is applied and user doesn't have active package - if so, redeem coupon instead of payment flow
    // If user has active package (upgrade scenario), use normal payment flow
    if (!hasActivePackage && couponState.couponApplied && couponState.couponValid && couponState.couponCode && memID !== '0') {
      await redeemCoupon(couponState.couponCode, memID)
      return
    }
    
    if (memID !== '0') {
      await FirebaseToken(memID, dispatch)
    }
  }

  useEffect(() => {
    const getStates = async () => {
      try {
        const ip = await getUserIP()
        const response = await fetch(
          `https://website-api-prod-262620024912.asia-south1.run.app/subscription/get_state_list`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
              current_ip: ip,
            } as any).toString(),
          },
        )

        const data = await response.json()
        if (data.status) {
          setStateList(data.data)
          const selectedState = data.data.find(
            (state: StateData) => state.is_selected,
          )

          if (selectedState) {
            setValue('state', userState || selectedState.state_name)
          }
        }
      } catch (error) {
        console.error(error)
      }
    }

    getStates()
  }, [])

  const onSubmit = (data: FormData) => {
    dispatch(setUserName(data.name))
    dispatch(setUserState(data.state))
  }

  const [isLoading, setIsLoading] = useState(false)
  const [couponError, setCouponError] = useState<string | null>(null)

  return isLoading ? (
    <Box className={styles.loadingContainer}>
      <CircularProgress />
    </Box>
  ) : (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.formContainer}
    >
      {/* Name Field */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <Box>
          <Box sx={{ mb: 2 }}>
            <label className={styles.fieldLabel}>
              Name
            </label>

            <sup className={styles.requiredAsterisk}>*</sup>
            <Controller
              name="name"
              control={control}
              rules={{
                required: 'Name is required',
                minLength: {
                  value: 3,
                  message: 'Name must be at least 3 characters long',
                },
              }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  hiddenLabel
                  fullWidth
                  size="small"
                  placeholder="Enter your full name"
                  onInput={(e: any) => {
                    e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, '')
                  }}
                  onChange={(e) => {
                    field.onChange(e)
                    dispatch(setUserName(e.target.value))
                  }}
                  value={field.value || userName}
                  sx={{
                    height: {
                      xs: '40px',
                      md: '48px',
                    },
                    color: 'black',
                    backgroundColor: 'white',
                    borderRadius: 2,
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#fff',
                      height: {
                        xs: '40px',
                        md: '48px',
                      },
                      fontSize: '14px',
                      borderRadius: 2,
                      '&:hover fieldset': {
                        borderColor: '#BA973B',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#BA973B',
                      },
                    },
                    '& .MuiInputBase-input::placeholder': {
                      fontFamily: '"Fira Sans", sans-serif',
                      fontWeight: 400,
                      fontSize: '14.13px',
                      lineHeight: '22.21px',
                      letterSpacing: '0%',
                    },
                    '& input:-webkit-autofill': {
                      backgroundColor: '#fff !important',
                      WebkitBoxShadow:
                        '0 0 0 100px transparent inset !important',
                      WebkitTextFillColor: '#000 !important',
                    },
                  }}
                  error={!!fieldState.error}
                />
              )}
            />
            {errors.name && (
              <p className={styles.errorMessage}>
                {errors.name.message}
              </p>
            )}
          </Box>

          {/* State Dropdown */}
          <Box sx={{ mb: 3 }}>
            <label className={styles.fieldLabel}>
              State
            </label>
            <sup className={styles.requiredAsteriskSimple}>*</sup>
            <Controller
              name="state"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  onChange={(e) => {
                    field.onChange(e)
                    dispatch(setUserState(e.target.value))
                  }}
                  value={field.value || userState}
                  select
                  variant="outlined"
                  fullWidth
                  size="small"
                  placeholder="Select state"
                  sx={{
                    height: {
                      xs: '40px',
                      md: '48px',
                    },
                    backgroundColor: 'white',
                    borderRadius: 2,
                    '& .MuiOutlinedInput-root': {
                      height: {
                        xs: '40px',
                        md: '48px',
                      },
                      borderRadius: 2,
                      '&:hover fieldset': {
                        borderColor: '#1d1d1e',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1d1d1e',
                      },
                    },
                    '& .MuiSelect-select': {
                      fontFamily: '"Fira Sans", sans-serif',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '22.21px',
                      letterSpacing: '0%',
                    },
                    '& .MuiInputBase-input::placeholder': {
                      fontFamily: '"Fira Sans", sans-serif',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '22.21px',
                      letterSpacing: '0%',
                    },
                    '& .MuiSelect-icon': {
                      color: '#F15F22',
                    },
                  }}
                  SelectProps={{
                    IconComponent: KeyboardArrowDownRoundedIcon,
                  }}
                  error={!!fieldState.error}
                >
                  {stateList && stateList.length > 0 && (
                    stateList.map((state) => (
                      <MenuItem key={state.state_id} value={state.state_name}>
                        {state.state_name}
                      </MenuItem>
                    ))
                  )}
                </TextField>
              )}
            />
            {errors.state && (
              <p className={styles.errorMessage}>State is required</p>
            )}
          </Box>
          
          {/* Coupon Error Message */}
          {couponError && (
            <Box
              sx={{
                mb: 2,
                p: 1.5,
                borderRadius: 2,
                backgroundColor: '#FFF3E0',
                border: '1px solid #FF9800',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <ErrorOutlineIcon sx={{ color: '#FF9800', fontSize: 20, flexShrink: 0 }} />
              <Typography
                sx={{
                  color: '#E65100',
                  fontSize: '14px',
                  fontWeight: 500,
                  fontFamily: '"Fira Sans", sans-serif',
                }}
              >
                {couponError}
              </Typography>
            </Box>
          )}
        </Box>

        {/* Buttons */}
        {memId ? (
          <Box>
            <Button
              type={'submit'}
              variant="contained"
              color="primary"
              fullWidth
              size="small"
              onClick={handleSubmit(async (data) => {
                dispatch(setUserName(data.name))
                await fetchData()
              })}
              sx={{
                textTransform: 'none',
                background: '#1d1d1e',
                display: 'flex',
                alignItems: 'center',
                fontSize: 14,
                borderRadius: 2,
                height: 50,
                fontWeight: 600,
              }}
            >
              Proceed to Pay
            </Button>
          </Box>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Button
              type={'submit'}
              variant="contained"
              color="primary"
              fullWidth
              size="small"
              onClick={handleSubmit((data) => {
                dispatch(setUserName(data.name))
                // handlePage('Mobile', 1)
                handlePage('Mobile', 0)
                dispatch(setLoginType(1))
              })}
              sx={{
                textTransform: 'none',
                background: '#1d1d1e',
                display: 'flex',
                alignItems: 'center',
                fontSize: 12,
                borderRadius: 2,
                boxShadow: 'none',
                fontWeight: 600,
              }}
            >
              <div className={`mobile-icon ${styles2.btnSub}`}>
                <CallRoundedIcon sx={{ color: 'white', fontSize: 20, m: 0 }} />
              </div>
              Login via Mobile Number
            </Button>
            <Button
              type={'submit'}
              variant="contained"
              color="primary"
              fullWidth
              size="small"
              onClick={handleSubmit((data) => {
                dispatch(setUserName(data.name))
                // handlePage('Email', 1)
                handlePage('Email', 0)
                dispatch(setLoginType(2))
              })}
              sx={{
                textTransform: 'none',
                background: '#1d1d1e',
                display: 'flex',
                alignItems: 'center',
                fontSize: 12,
                borderRadius: 2,
                fontWeight: 600,
              }}
            >
              <div className={`email-icon ${styles2.btnSub}`}>
                <EmailRoundedIcon sx={{ color: 'white', fontSize: 20, m: 0 }} />
              </div>
              Login via Email ID
            </Button>
          </Box>
        )}
      </Box>
    </form>
  )
}

export default InitialDetails
