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
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import {
  fetchLoginDetails,
  fetchSendOtp,
} from '@/redux/thunks/loginDetailsThunks'
import { useAppDispatch } from '@/redux/hooks'
import { getAuth, signInWithCustomToken } from 'firebase/auth'
import app from '@/services/firebase/firebase.init'
import { Dispatch } from 'redux'
import {
  setPaymentScreenDetails,
  setStartLearningDetails,
} from '@/redux/slices/PaymentSlice'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { exit } from 'process'
import { fetchActiveStatus } from '@/redux/thunks/courseDetailsThunk'
import {
  setCountryDialCode,
  setMobileNumber,
} from '@/redux/slices/accountPreferencesSlice'
import {
  setLoginType,
  setUserInfo,
  setUserName,
} from '@/redux/slices/loginDetailsSlice'
// import { EventData } from '@/app/events/[id]/page' // Commented out - not available
import { CoPresentSharp } from '@mui/icons-material'
import styles from './LoginEmailAndMobile.module.css'

interface FormData {
  email?: string
  mobile?: string
  otp: string
  dialCode?: string
}

interface EmailDetailsProps {
  handlePage: (page: string, activeStepper: number) => boolean
  loginTypeFE: 'Email' | 'Mobile'
}

export default function LoginEmailAndMobile({
  handlePage,
  loginTypeFE,
}: EmailDetailsProps) {
  const auth = getAuth(app)
  const [showOTPFields, setShowOTPFields] = useState(false)
  const [isBlurredOnScroll, setIsBlurredOnScroll] = useState(false)
  const [resentOtp, setResentOtp] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [seconds, setSeconds] = useState(0)
  const [done, setDone] = useState(false)
  const foo = useRef<any>(null)
  const phoneInputContainerRef = useRef<HTMLDivElement | null>(null)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const dispatch = useAppDispatch()
  const [mobileInfo, setMobileInfo] = useState({ mobile: '', dialCode: '' })

  //--------- Language State -------------//
  const selectedLanguage = useSelector(
    (state: RootState) => state.language.selectedLanguage,
  )

  //--------- User Login State -------------//

  const loginType = useSelector((state: RootState) => state.login.loginType)

  const email = useSelector((state: RootState) => state.login.userInfo.email)

  const dialCode = useSelector(
    (state: RootState) => state.login.userInfo.dialCode,
  )

  const userInfo = useSelector((state: RootState) => state.login.userInfo)

  const mobileNumber = useSelector(
    (state: RootState) => state.login.userInfo.mobile,
  )

  const firebaseToken = useSelector(
    (state: RootState) => state.login.firebaseToken,
  )

  const memId = useSelector((state: RootState) => state.login.memId)

  //--------- Selected Package State -------------//
  const selectedPackageId = useSelector(
    (state: RootState) => state.package.selectedPackageId,
  )
  const selectedCourse = useSelector(
    (state: RootState) => state.package.selectedCourse,
  )

  useEffect(() => {
    if (foo.current) {
      clearInterval(foo.current)
      foo.current = null
    }
    //For new interval immediately
    if (seconds > 0) {
      foo.current = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(foo.current)
            foo.current = null
            setDone(true)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    } else {
      setDone(true)
    }

    return () => {
      if (foo.current) {
        clearInterval(foo.current)
        foo.current = null
      }
    }
  }, [seconds])

  useEffect(() => {
    const handleScroll = () => {
      if (phoneInputContainerRef.current) {
        const inputEl = phoneInputContainerRef.current.querySelector('input')
        if (inputEl) {
          inputEl.blur()
          setIsBlurredOnScroll(true)
          setTimeout(() => setIsBlurredOnScroll(false), 1500)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
    trigger,
    setError,
    clearErrors,
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      mobile: '',
      otp: '',
      dialCode: '',
    },
  })

  //---------- Timer Function -------------//
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
    } else if (loginTypeFE === 'Mobile') {
      if (!mobileWatch || mobileWatch.length !== 12) {
        setError('mobile', {
          type: 'invalid',
          message: 'Mobile number must be 10 digits',
        })
        return
      }
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

  //--------- Handle SUBMIT Function -------------//
  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    const payload = {
      selectedLanguage: selectedLanguage,
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
    if (loginResponse && Object.keys(loginResponse).length > 0) {
      const auth = getAuth(app)
      const userCredential = await signInWithCustomToken(
        auth,
        loginResponse.firebase_token,
      )
      const idToken = await userCredential.user.getIdToken(true)
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
          `${import.meta.env.VITE_AUTH_API_URL}/custom_api/sync_user_auth_data`,
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
      const add_credits = localStorage.getItem('add_credits')
      const redirect_url = localStorage.getItem('redirect_url')
      const join_as_expert_from = localStorage.getItem('join_as_expert_from')
      const redirectUrl = localStorage.getItem('redirectUrl')

      if (redirectUrl) {
        if (redirectUrl && redirectUrl.includes('experts')) {
          const isExpert = Cookies.get('is_expert')
          const expertId = Cookies.get('expert_id')
          if (isExpert && expertId && expertId !== '0') {
            window.location.href = `/expert/dashboard/${expertId}?lang=${selectedLanguage}`
            return
          }
        }
        window.location.href = redirectUrl
      } else if (add_credits) {
        localStorage.removeItem('add_credits')
        window.location.href = '/experts/add-credits'
      } else if (redirect_url) {
        localStorage.removeItem('redirect_url')
        window.location.href = redirect_url
        window.location.reload()
      } else if (join_as_expert_from == 'organisation') {
        localStorage.removeItem('join_as_expert_from')
        window.location.href = '/join-expert/organisation/form'
      } else if (join_as_expert_from == 'individual') {
        localStorage.removeItem('join_as_expert_from')
        window.location.href = '/join-expert/individual/form'
      } else if (localStorage.getItem('redirectToRegistrationPage')) {
        const registerlink = localStorage.getItem('registrationPageLink')
        const detailsLink = localStorage.getItem('detailsPageLink')
        localStorage.removeItem('redirectToRegistrationPage')
        localStorage.removeItem('registrationPageLink')
        localStorage.removeItem('detailsPageLink')
      } else if (localStorage.getItem('rtesp')) {
        let expertId = localStorage.getItem('eid')
        // If not available in localStorage, get it from cookies
        if (!expertId) {
          expertId = Cookies.get('expert_id') as string
        }
        localStorage.removeItem('rtesp')
        localStorage.removeItem('eid')
        window.location.href = `/expert/subscription/${expertId}`
      } else {
        window.location.href = '/'
      }
    } else {
      setIsLoading(false)
      setError('otp', {
        type: 'invalid',
        message: 'Invalid OTP',
      })
    }
  }

  return (
    <Box
      sx={{
        width: {
          xs: '100%',
          md: '70%',
        },
        display: 'flex',
        flexDirection: 'column',
        mt: isMobile ? 1 : 12,
        justifyContent: 'center',
        height: {
          xs: '100%',
          md: '80%',
        },
      }}
    >
      <Box
        sx={{
          m: -2,
          py: isMobile ? 0.3 : 0.4,
          px: 2,
          my: 1,
        }}
      >
        <Typography sx={{ color: '#2E2E54', fontWeight: '700', fontSize: 26 }} component="h2">
          {showOTPFields
            ? 'Enter OTP'
            : loginTypeFE === 'Email'
              ? 'Enter Email ID'
              : 'Enter Mobile Number'}
        </Typography>
      </Box>
      <Box
        sx={{
          height: '85%',
        }}
      >
        {showOTPFields && (
          <Typography
            variant="body1"
            sx={{
              color: '#2E2E54',
              fontSize: 14,
              mt: isMobile ? -0.2 : -1.5,
            }}
          >
            Please check your {loginTypeFE} to find the OTP
          </Typography>
        )}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.loginForm}
        >
          <Box>
            {loginTypeFE === 'Email' ? (
              <>
                <label
                  className={showOTPFields ? styles.labelInactive : styles.labelActive}
                >
                  Email ID
                </label>
                <sup className={showOTPFields ? styles.asteriskInactive : styles.asteriskActive}>
                  *
                </sup>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: 'email is required',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
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
                      ref={phoneInputContainerRef}
                      placeholder="Enter your email"
                      size="small"
                      sx={{
                        color: 'black',
                        backgroundColor: 'white',
                        border: 'none',
                        borderRadius: 2,
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        },
                        '& .MuiInputBase-root.Mui-disabled': {
                          backgroundColor: '#D4D4D4',
                        },
                      }}
                      error={!!fieldState.error}
                      disabled={showOTPFields}
                      // onFocus={() => trigger('email')}
                      onBlur={() => trigger('email')}
                      onChange={(e) => {
                        field.onChange(e)
                        trigger('email')
                      }}
                    />
                  )}
                />
                {errors.email && (
                  <p className={styles.errorText}>
                    <>{errors.email.message}</>
                  </p>
                )}
              </>
            ) : (
              <>
                <label
                  className={showOTPFields ? styles.labelMobileInactive : styles.labelMobile}
                >
                  Mobile number
                </label>
                <sup className={showOTPFields ? styles.asteriskInactive : styles.asteriskActive}>
                  *
                </sup>
                <Controller
                  name="mobile"
                  control={control}
                  rules={{
                    required: 'mobile no is required',
                    validate: (value) => {
                      if (!value) return 'mobile no is required'
                      const phoneNumber = value.startsWith('91')
                        ? value.replace('91', '').trim()
                        : value

                      return /^[6-9][0-9]{7,11}$/.test(phoneNumber)
                        ? true
                        : 'Entered value does not match mobile format'
                    },
                  }}
                  render={({ field }) => (
                    <div ref={phoneInputContainerRef}>
                      <PhoneInput
                        {...field}
                        country={'in'}
                        onBlur={() => trigger('mobile')}
                        enableSearch={true}
                        inputProps={{
                          name: 'Mobile Number',
                          required: true,
                          autoFocus: false,
                        }}
                        inputStyle={{
                          width: '100%',
                          height: '40px',
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
                        onChange={(
                          value,
                          countryData: { dialCode: string },
                        ) => {
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
                    </div>
                  )}
                />
                {errors.mobile && (
                  <p className={styles.errorText}>
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
                <label className={styles.labelOtp}>
                  OTP
                </label>
                <sup className={styles.asteriskActive}>*</sup>
                <Controller
                  name="otp"
                  control={control}
                  rules={{
                    required: 'OTP is required',
                    minLength: 4,
                    maxLength: 4,
                    pattern: {
                      value: /^[0-9]{4}$/,
                      message: 'Only numbers are allowed',
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <OtpInput
                      //   {...field}
                      value={field.value}
                      numInputs={4}
                      onChange={(otp) => {
                        const numericOtp = otp.replace(/\D/g, '')
                        field.onChange(numericOtp)
                        clearErrors('otp')
                      }}
                      inputStyle={{
                        width: '100%',
                        height: '3.8rem',
                        margin: '0 0.5rem',
                        border: '1px solid #1d1d1e',
                        // outline: 'none',
                        // borderRadius: '12px',
                        backgroundColor: '#fff',
                        color: 'black',
                      }}
                      renderInput={(props) => (
                        <input
                          {...props}
                          type="tel"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          maxLength={4}
                          onInput={(e) => {
                            e.currentTarget.value =
                              e.currentTarget.value.replace(/\D/g, '') // Ensures only digits
                          }}
                          onPaste={(e) => {
                            const pastedText = e.clipboardData.getData('text')
                            if (!/^\d+$/.test(pastedText)) {
                              e.preventDefault() // Blocks pasting non-numeric characters
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
                  color: '#2E2E54',
                }}
              >
                <span className={styles.otpText}>
                  Did not receive OTP?
                </span>
                {loginTypeFE === 'Email' && (
                  <span>Please check your spam folder</span>
                )}{' '}
                <Button
                  className="restart-alt-icon"
                  sx={{
                    padding: '5px 0',
                    color: done ? '#1d1d1e' : '#7E7E7E',
                    // display: 'flex',
                    // alignItems: 'center',
                    // justifyContent: 'flex-end',
                    marginLeft: 'auto',
                    textTransform: 'none',
                    fontSize: 12,
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                    fontWeight: 600,
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
                  className={styles.changeText}
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
                    alt="chevron Icon"
                    width={20}
                    height={20}
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
                  height: '45px',
                  textTransform: 'none',
                  background: '#1d1d1e',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 12,
                  borderRadius: 2,
                  marginTop: 4,
                  fontWeight: 600,
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
                  height: '45px',
                  textTransform: 'none',
                  background: '#1d1d1e',
                  display: 'flex',
                  colo: '#fff',
                  alignItems: 'center',
                  fontSize: 12,
                  borderRadius: 2,
                  '&:disabled': {
                    backgroundColor: '#1d1d1e',
                  },
                  mt: 5,
                  fontWeight: 600,
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
                  'Verify OTP'
                )}
              </Button>
            )}
            <Typography
              sx={{
                fontSize: 13,
                mt: 0.8,
                color: '#2E2E54',
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 0.5,
                mb: 5,
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
