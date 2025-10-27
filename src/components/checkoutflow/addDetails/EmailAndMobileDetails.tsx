import React, { useEffect, useRef, useState } from 'react'
import {
  Box,
  IconButton,
  TextField,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  FormHelperText,
  CircularProgress,
} from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import OtpInput from 'react-otp-input'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './EmailAndMobileDetails.css'
import styles from './EmailAndMobileDetails.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import {
  fetchLoginDetails,
  fetchSendOtp,
} from '@/redux/thunks/loginDetailsThunks'
import {
  GetOtpResponseState,
  setFirebaseToken,
  setOtpResponse,
} from '@/redux/slices/loginDetailsSlice'
import { useAppDispatch } from '@/redux/hooks'
import { getAuth, signInWithCustomToken } from 'firebase/auth'
import app from '@/services/firebase/firebase.init'
import { Dispatch } from 'redux'
import { fetchCreateOrderData } from '@/app/course/action'
import {
  setPaymentScreenDetails,
  setStartLearningDetails,
} from '@/redux/slices/PaymentSlice'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { fetchActiveStatus } from '@/redux/thunks/courseDetailsThunk'
import { exit } from 'process'
import {
  setCountryDialCode,
  setMobileNumber,
} from '@/redux/slices/accountPreferencesSlice'

interface FormData {
  email?: string
  mobile?: string
  otp: string
  dialCode: string
}

interface EmailDetailsProps {
  handlePage: (page: string, activeStepper: number) => boolean
  loginTypeFE: 'Email' | 'Mobile'
  //   currentPage: string
}

export default function EmailAndMobileDetails({
  handlePage,
  loginTypeFE,
}: EmailDetailsProps) {
  const auth = getAuth(app)
  const [showOTPFields, setShowOTPFields] = useState(false)
  const [resentOtp, setResentOtp] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const dispatch = useAppDispatch()
  const selectedLanguage = useSelector(
    (state: RootState) => state.language.selectedLanguage,
  )
  const loginType = useSelector((state: RootState) => state.login.loginType)
  const email = useSelector((state: RootState) => state.login.userInfo.email)
  const userName = useSelector((state: RootState) => state.login.userName)
  const [mobileInfo, setMobileInfo] = useState({ mobile: '', dialCode: '' })

  const mobileNumber = useSelector(
    (state: RootState) => state.login.userInfo.mobile,
  )
  const dialCode = useSelector(
    (state: RootState) => state.login.userInfo.dialCode,
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
  const memId = useSelector((state: RootState) => state.login.memId)
  const [seconds, setSeconds] = useState(0)
  const [done, setDone] = useState(false)
  const foo = useRef<any>(null)
  const userInfo = useSelector((state: RootState) => state.login.userInfo)

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(foo.current)
      setDone(true)
    }
  }, [seconds])

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
    trigger,
    clearErrors,
    setError,
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      mobile: '',
      otp: '',
      dialCode: '',
    },
  })

  const triggerTime = () => {
    function tick() {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1
        } else {
          clearInterval(foo.current)
          setDone(true)
          return 0
        }
      })
    }
    foo.current = setInterval(() => tick(), 1000)

    return () => clearInterval(foo.current)
  }

  //--------- Handle OTP Function -------------//
  const handleGetOTP = async ({
    is_resend = false,
  }: {
    is_resend?: boolean
  }) => {
    setDone(false)
    setSeconds(30)
    triggerTime() // Add this to start the timer

    let emailWatch = watch('email')
    let mobileWatch = watch('mobile')

    const isValidEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    }

    if (loginTypeFE === 'Email') {
      if (!emailWatch || !isValidEmail(emailWatch)) {
        setError('email', {
          type: 'invalid',
          message: 'Please enter a valid email address',
        })
        return
      }
      clearErrors('email')
    } else if (loginTypeFE === 'Mobile') {
      if (!mobileWatch || mobileWatch.length !== 12) {
        setError('mobile', {
          type: 'invalid',
          message: 'Mobile number must be 10 digits',
        })
        return
      }
      clearErrors('mobile')
    }

    setShowOTPFields(true)
    const payload = {
      selectedLanguage: selectedLanguage,
      mobileNumber: loginTypeFE === 'Mobile' ? mobileInfo.mobile : '',
      email: loginTypeFE === 'Email' ? emailWatch : '',
      loginType: loginType,
      dialCode: mobileInfo.dialCode,
      is_resend: is_resend,
    }
    dispatch(fetchSendOtp(payload as never))
  }

  const FirebaseToken = async (
    token: string,
    dispatch: Dispatch,
    loginResponse: any,
  ) => {
    try {
      const idToken = await auth.currentUser?.getIdToken(true)
      const res = await fetchCreateOrderData(
        selectedLanguage,
        idToken as string,
        loginResponse?.mem_id ? loginResponse?.mem_id : 0,
        selectedPackageId,
        selectedCourse,
        handlePage,
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

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    const payload = {
      selectedLanguage: selectedLanguage,
      user_name: userName,
      mobileNumber: mobileInfo.mobile,
      email: email,
      loginType: loginType,
      dialCode: mobileInfo.dialCode,
      state_id: '',
      otp_code: data.otp,
      otp_verified: false,
      login_type: loginType,
      package_id: selectedPackageId,
      course_id: 1,
    }
    const loginResponse = await dispatch(fetchLoginDetails(payload as never))
    if (
      loginResponse &&
      Object.keys(loginResponse).length > 0 &&
      loginResponse.status == true
    ) {
      const auth = getAuth(app)
      const userCredential = await signInWithCustomToken(
        auth,
        loginResponse.firebase_token,
      )
      const idToken = await auth.currentUser?.getIdToken(true)
      try {
        const formData = new FormData()
        formData.append('app_language', selectedLanguage.toString())
        formData.append('mobile_number', loginResponse.mobile_number.toString())
        formData.append('email', loginResponse.user_email.toString())
        formData.append('secret_key', loginResponse.secret_key.toString())
        formData.append('mem_id', loginResponse.mem_id.toString())
        formData.append('device_type', '3')
        formData.append('fcm_code', loginResponse.firebase_token.toString())

        const response = await fetch(
          `${import.meta.env.VITE_AUTH_API_URL}/dashboard/sync_user_auth_data`,
          {
            method: 'POST',
            body: formData,
          },
        )
        const data = await response.json()
      } catch (error) {
        console.error('Error fetching expert details:', error)
      }
      Cookies.set(
        'is_expert',
        loginResponse?.is_expert ? loginResponse?.is_expert : '0',
      )
      Cookies.set(
        'expert_id',
        loginResponse?.xpert_id ? loginResponse?.xpert_id : '',
      )
      Cookies.set(
        'secret_key',
        loginResponse?.secret_key ? loginResponse?.secret_key : '',
      )
      Cookies.set('mem_id', loginResponse?.mem_id ? loginResponse?.mem_id : 0)
      Cookies.set(
        'userInfo',
        userInfo ? JSON.stringify(userInfo) : JSON.stringify({}),
      )
      const activePackage = await dispatch(
        fetchActiveStatus(
          idToken as string,
          loginResponse.mem_id.toString(),
          selectedLanguage.toString(),
        ),
      )
      Cookies.set('active_packages', activePackage)
      await FirebaseToken(firebaseToken, dispatch, loginResponse)
    } else {
      setIsLoading(false)
      setError('otp', { type: 'manual', message: 'Invalid OTP' })
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: showOTPFields ? '95%' : '100%',
        paddingBottom: showOTPFields && isMobile ? '75px' : '0',
      }}
    >
      <Box
        sx={{
          m: -2,
          py: isMobile ? 0.3 : 1.5,
          px: 2,
          borderBottom: 2,
          borderBottomColor: '#ABABBB',
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
        }}
      >
        <IconButton
          className="back-icon"
          onClick={() => {
            if (showOTPFields === false) {
              // handlePage('Initial Details', 1)
              handlePage('Initial Details', 0)
            } else {
              setIsLoading(false)
              setShowOTPFields(false)
            }
          }}
        >
          <ArrowBackRoundedIcon sx={{ color: '#1d1d1e', fontSize: 20, m: 0 }} />
        </IconButton>
        <Typography
          sx={{ color: '#d1d1e', fontWeight: '600', fontSize: '15px' }}
          component="h3"
        >
          {showOTPFields
            ? 'Enter OTP'
            : loginTypeFE === 'Email'
              ? 'Enter Email ID'
              : 'Enter mobile number'}
        </Typography>
      </Box>
      <Box
        sx={{
          height: '90%',
        }}
      >
        {showOTPFields && (
          <Typography
            variant="body1"
            sx={{
              fontStyle: 'italic',
              color: '#1d1d1e',
              fontSize: 14,
              mt: isMobile ? 0.2 : 1,
            }}
          >
            Please check your {loginTypeFE} to find the OTP
          </Typography>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
          <Box>
            {loginTypeFE === 'Email' ? (
              <>
                <label className={styles.fieldLabel}>
                  Email ID
                </label>
                <sup className={showOTPFields ? styles.requiredAsteriskDisabled : styles.requiredAsterisk}>
                  *
                </sup>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: 'email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'Entered value does not match email format',
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      type="email"
                      required
                      hiddenLabel
                      fullWidth
                      placeholder="Enter your email"
                      size="small"
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
                      // disabled={showOTPFields}
                      onChange={(e) => {
                        field.onChange(e)
                        clearErrors('email') // Clear error as soon as user types
                      }}
                    />
                  )}
                />
                {errors.email && (
                  <p className={styles.errorMessage}>
                    <>{errors.email.message}</>
                  </p>
                )}
              </>
            ) : (
              <>
                <label
                  className={`${styles.fieldLabel} ${isMobile ? (showOTPFields ? styles.fieldLabelMobileOtp : styles.fieldLabelMobile) : ''}`}
                >
                  Mobile number
                </label>
                <sup className={showOTPFields ? styles.requiredAsteriskDisabled : styles.requiredAsterisk}>
                  *
                </sup>
                <Controller
                  name="mobile"
                  control={control}
                  rules={{
                    validate: (value) => {
                      if (!value) return 'Mobile number is required'
                      const formattedValue = value.startsWith('+')
                        ? value
                        : `+${value}`
                      const phoneNumber =
                        parsePhoneNumberFromString(formattedValue)
                      if (!phoneNumber || !phoneNumber.isValid()) {
                        return 'Entered value does not match mobile format'
                      }
                      if (phoneNumber.country === 'IN') {
                        const nationalNumber = phoneNumber.nationalNumber
                        if (!/^[6789]\d{9}$/.test(nationalNumber)) {
                          return 'Entered value does not match mobile format'
                        }
                      }
                      return true
                    },
                  }}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      country={'in'}
                      enableSearch={true}
                      inputProps={{
                        name: 'Mobile Number',
                        required: true,
                        autoFocus: true,
                      }}
                      inputStyle={{
                        width: '100%',
                        height: isMobile ? '40px' : '48px',
                        color: 'black',
                        borderRadius: '0px',
                        backgroundColor: showOTPFields ? '#D4D4D4' : '#fff',
                      }}
                      containerStyle={{
                        marginTop: 2,
                        borderRadius: '8px',
                      }}
                      dropdownStyle={{
                        color: 'black',
                        borderRadius: '8px',
                        backgroundColor: showOTPFields ? '#D4D4D4' : '#fff',
                      }}
                      searchStyle={{
                        color: 'black',
                        width: '90%',
                        display: 'flex',
                        backgroundImage: 'none',
                      }}
                      onChange={(value, countryData: { dialCode: string }) => {
                        const countryCode = `+${countryData.dialCode}`
                        let phoneNumber = value
                          .slice(countryCode.length - 1)
                          .trim()

                        setValue('dialCode', countryCode)
                        setValue('mobile', phoneNumber)
                        setMobileInfo({
                          mobile: phoneNumber,
                          dialCode: countryCode,
                        })
                        dispatch(setMobileNumber(phoneNumber))
                        dispatch(setCountryDialCode(countryCode))

                        field.onChange(value)
                      }}
                      disableDropdown={showOTPFields}
                      disabled={showOTPFields}
                    />
                  )}
                />
                {errors.mobile && (
                  <p className={styles.errorMessage}>
                    <>{errors.mobile.message}</>
                  </p>
                )}
              </>
            )}

            {showOTPFields && (
              <Box
                sx={{
                  mt: 4,
                  my: 1,
                  mx: -1,
                }}
              >
                <label
                  className={`${styles.otpLabel} ${isMobile ? styles.otpLabelMobile : ''}`}
                >
                  OTP
                </label>
                <sup className={styles.requiredAsterisk}>*</sup>
                <Controller
                  name="otp"
                  control={control}
                  rules={{
                    required: 'OTP is required',
                    minLength: 4,
                    maxLength: 4,
                  }}
                  render={({ field, fieldState }) => (
                    <OtpInput
                      //   {...field}
                      value={field.value}
                      numInputs={4}
                      onChange={(value) => {
                        field.onChange(value)
                        clearErrors('otp')
                        // Check if OTP is 4 digits, then trigger login
                        // if (value.length === 4) {
                        //   setTimeout(() => handleSubmit(onSubmit)(), 0)
                        // }
                      }}
                      inputStyle={{
                        width: isMobile ? '25%' : '2.8rem',
                        height: '2.8rem',
                        margin: '0 0.5rem',
                        border: '1px solid #1d1d1e',
                        outline: 'none',
                        // borderRadius: '12px',
                        backgroundColor: '#fff',
                        color: 'black',
                      }}
                      renderInput={(props) => (
                        <input
                          {...props}
                          inputMode="numeric"
                          onInput={(e) => {
                            e.currentTarget.value =
                              e.currentTarget.value.replace(/\D/g, '')
                          }}
                          onPaste={(e) => {
                            const pastedText = e.clipboardData.getData('text')
                            if (!/^\d+$/.test(pastedText)) {
                              e.preventDefault()
                            }
                          }}
                        />
                      )}
                    />
                  )}
                />
                {errors.otp && (
                  <FormHelperText error sx={{ mx: 2 }}>
                    {errors.otp.message}
                  </FormHelperText>
                )}
              </Box>
            )}
            {showOTPFields && (
              <Box
                sx={{
                  textAlign: 'right',
                  fontSize: 12,
                  display: 'flex',
                  flexDirection: 'column',
                  color: '#fff',
                  marginTop: {
                    xs: '10px',
                    md: 'unset',
                  },
                }}
              >
                <span className={styles.didNotReceiveText}>
                  Did not receive OTP?
                </span>
                {loginTypeFE === 'Email' && (
                  <span className={styles.spamFolderText}>
                    Please check your spam folder
                  </span>
                )}{' '}
                <Button
                  className="restart-alt-icon"
                  sx={{
                    padding: '5px 0',
                    color: done ? '#1d1d1e' : '#7E7E7E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    textTransform: 'none',
                    fontSize: 12,
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                    fontWeight: '600',
                    width: 'fit-content',
                    marginLeft: 'auto',
                  }}
                  disabled={!done}
                  onClick={() => {
                    setDone(false)
                    setSeconds(30)
                    setResentOtp(true)
                    setValue('otp', '')
                    handleGetOTP({ is_resend: true })
                    setIsLoading(false)
                  }}
                >
                  <RestartAltOutlinedIcon
                    sx={{
                      color: done ? '#1d1d1e' : '#7E7E7E',
                      fontSize: 20,
                      m: 0,
                    }}
                  />
                  Resend the OTP in 00:{seconds}
                </Button>
                <span
                  className={styles.changeContactText}
                  onClick={() => {
                    clearErrors()
                    setSeconds(0)
                    setValue('otp', '')
                    setShowOTPFields(false)
                  }}
                >
                  {' '}
                  <img
                    src="/icons/edit.svg"
                    alt="Edit icon"
                    width={isMobile ? 10 : 20}
                    height={isMobile ? 10 : 24}
                    className={styles.editIcon}
                  />
                  Change{' '}
                  {loginTypeFE === 'Email' ? ' email ID' : ' mobile number'}
                </span>
              </Box>
            )}
          </Box>
          <Box>
            {!showOTPFields && (
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => handleGetOTP({ is_resend: false })}
                sx={{
                  textTransform: 'none',
                  background: '#1d1d1e',
                  height: {
                    xs: '40px',
                    md: '48px',
                  },
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 12,
                  borderRadius: 2,
                  marginTop: {
                    xs: '16px',
                    md: 'unset',
                  },
                  fontWeight: '600',
                }}
              >
                Get OTP
              </Button>
            )}
            {showOTPFields && (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  textTransform: 'none',
                  background: '#1d1d1e',
                  height: {
                    xs: '40px',
                    md: '48px',
                  },
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 12,
                  marginTop: {
                    xs: '16px',
                    md: 'unset',
                  },
                  borderRadius: 2,
                  '&:disabled': {
                    backgroundColor: '#1d1d1e',
                  },
                  fontWeight: '600',
                }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <CircularProgress
                    size={24}
                    sx={{
                      color: 'white',
                    }}
                  />
                ) : (
                  'Submit'
                )}
              </Button>
            )}
            <Typography
              sx={{
                fontSize: 13,
                mt: 2,
                color: '#1d1d1e',
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 0.5,
                cursor: 'pointer',
              }}
            >
              {`By continuing you agree to Boss Wallah's `}
              <Link
                to={'/terms-of-use'}
                className={styles.termsLink}
              >
                Terms of use
              </Link>
            </Typography>
          </Box>
        </form>
      </Box>
    </Box>
  )
}
