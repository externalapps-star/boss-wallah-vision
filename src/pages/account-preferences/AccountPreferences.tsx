import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  TextField,
  Button,
  Typography,
  Box,
  Checkbox,
  Dialog,
  DialogContent,
  DialogActions,
  CircularProgress,
  Divider,
} from '@mui/material'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import { ArrowLeft } from 'lucide-react';
import { Button as ButtonUI } from '@/components/ui/button';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { RootState } from '@/redux/store'
import {
  setMobileNumber,
  setCountryDialCode,
  sendOtp,
  setOtp,
  verifyOtp,
  togglePreference,
  setOtpError,
  setOtpErrorMessage,
  setEmail,
  setEmailError,
  setEmailErrorMessage,
} from '@/redux/slices/accountPreferencesSlice'
import { useAppDispatch } from '@/redux/hooks'
import styles from './accountPreferences.module.css'
import './accountPreferences.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  fetchAccountPreferences,
  fetchUserVerification,
  fetchVerifyOtp,
} from '@/redux/thunks/AccountPreferencesThunk'
import { Container } from '@mui/system'
import Cookies from 'js-cookie'

const AccountPreferences = () => {
  const [searchParams] = useSearchParams()
  const device_type = searchParams.get('device_type')
  //-------------- State Variables ------------------//
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const totalTime = 10
  const [showPopup, setShowPopup] = useState(false)
  const [progress, setProgress] = useState(100)
  const [timer, setTimer] = useState(10)
  const [mobileError, setMobileError] = useState(false)
  const [mobileErrorMessage, setMobileErrorMessage] = useState('')
  const [emailNewError, setNewEmailError] = useState(false)
  const [emailNewErrorMessage, setNewEmailErrorMessage] = useState('')
  const [isEmail, setIsEmail] = useState(false)
  const [emailNew, setEmailNew] = useState('')
  const [error, setError] = useState(false)
  const [userType, setUserType] = useState(0)
  const [message, setMessage] = useState('')
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false)

  //-------------- Redux Variables ------------------//
  const {
    accountPreferencesData,
    userVerificationData,
    verifyOTPData,
    mobileNumber,
    email,
    countryDialCode,
    isOtpSent,
    otp,
    otpError,
    otpErrorMessage,
    emailError,
    emailErrorMessage,
    isOtpVerified,
    preferences,
  } = useSelector((state: RootState) => state.accountPreferences)

  const selectedLanguage = useSelector(
    (state: RootState) => state.language.selectedLanguage,
  )

  //---------------------- Functions -----------------------//
  const removeDialCode = (phoneNumber: string) => {
    if (phoneNumber.startsWith(countryDialCode)) {
      return phoneNumber.slice(countryDialCode.length)
    }
    return phoneNumber
  }

  const sanitizedMobileNumber = removeDialCode(mobileNumber)

  const handleDownload = async () => {
    try {
      const response = await fetch(
        verifyOTPData?.data?.data?.certiificate_path as never,
      )
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)

      const link = document.createElement('a')
      link.href = url
      link.download = 'certificate.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading the certificate:', error)
    }
  }

  const handleEmailValueChange = (value: string) => {
    dispatch(setEmail(value))
    dispatch(setMobileNumber(''))
    setNewEmailError(false)
    setNewEmailErrorMessage('')
  }

  const handleToggleEmailMobile = () => {
    setIsEmail(!isEmail)
    dispatch(setMobileNumber(''))
    dispatch(setEmail(''))
    dispatch(sendOtp(false))
  }

  const handleSendOtp = async () => {
    if ((!mobileNumber || mobileNumber.length < 10) && !isEmail) {
      setMobileError(true)
      setMobileErrorMessage(`${accountPreferencesData?.invalid_num_txt}`)
      return
    }
    if ((!email || email.length <= 0) && isEmail) {
      setNewEmailError(true)
      setNewEmailErrorMessage("Invalid Email")
      return
    }
    const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]+$/
    if (isEmail && !emailRegex.test(email)) {
      setNewEmailError(true)
      setNewEmailErrorMessage('Invalid email format')
      return
    }
    setError(false)
    setMobileError(false)
    setMobileErrorMessage('')
    setNewEmailError(false)
    setNewEmailErrorMessage('')
    const response = await dispatch(
      fetchUserVerification({
        selectedLanguage,
        email,
        mobileNumber: sanitizedMobileNumber,
        countryDialCode,
      }),
    )
    setEmailNew(response?.email)
    if (response?.userType !== undefined) {
      setUserType(response.userType)
      setMessage(response.message)
      if (response.userType === 2 || response.userType === 3) {
        setOpenSuccessDialog(true)
      } else {
        setOpenSuccessDialog(false)
      }
    }
  }

  const handleMobileNumber = (value: string, country: any) => {
    dispatch(setMobileNumber(value))
    dispatch(setCountryDialCode(country?.dialCode))
  }

  const handleVerifyOtp = () => {
    if ((!otp || otp.length < 6) && !isEmail) {
      dispatch(setOtpError(true))
      dispatch(setOtpErrorMessage('Invalid OTP'))
      return
    }
    if ((!email || email.length < 6) && isEmail) {
      dispatch(setEmailError(true))
      dispatch(setEmailErrorMessage('Invalid OTP'))
      return
    }
    dispatch(
      fetchVerifyOtp({
        selectedLanguage,
        mobileNumber: sanitizedMobileNumber,
        email,
        otp,
      }),
    )
  }

  const clearMobileError = () => {
    dispatch(setMobileNumber(''))
    setMobileError(false)
    setMobileErrorMessage('')
  }

  const clearOtpError = () => {
    dispatch(setOtp(''))
    setOtpError(false)
    setNewEmailError(false)
    setNewEmailErrorMessage('')
    setOtpErrorMessage('')
    dispatch(setOtpError(false))
    dispatch(setOtpErrorMessage('false'))
  }

  const handleCheckboxChange = (id: number) => {
    dispatch(togglePreference(id))
    const updatedPreferences = preferences.map((pref) =>
      pref.id === id ? { ...pref, checked: !pref.checked } : pref,
    )
    const allSelected = updatedPreferences.every((pref) => pref.checked)
    if (allSelected) {
      setError(false)
    }
  }

  const handleDelete = () => {
    const allSelected = preferences.every((pref) => pref.checked)
    if (!allSelected) {
      setError(true)
    } else {
      setError(false)
      setShowPopup(true)
    }
  }

  const fetchDeleteUserAccount = async (payload: {
    record_id: number
    mobile_number: string
    mem_id: string
    user_name: string
    email: string
  }) => {
    try {
      const response = await fetch(
        `https://bw-account-deletion-service-prod-262620024912.asia-south1.run.app/api/account-deletion/delete_user_account`,
        {
          method: 'POST',
          body: new URLSearchParams({
            request_from:
              !device_type ||
              device_type === undefined ||
              device_type.length <= 0
                ? '1'
                : '2',
            record_id: payload.record_id.toString(),
            mobile_number: isEmail ? '' : payload.mobile_number,
            mem_id: payload.mem_id,
            user_name: payload.user_name,
            email: isEmail ? payload.email : '',
          }).toString(),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      const res = await response.json()
      if (res.status === 'success') {
        Cookies.remove('mem_id')
        Cookies.remove('userInfo')
        Cookies.remove('active_packages')
        if (res.data.redirect_url) {
          navigate(res.data.redirect_url)
        } else {
          navigate('/')
        }
      }
    } catch (error) {
      alert('Failed to delete user')
      console.error('Failed to delete user:', error)
    }
  }

  useEffect(() => {
    if (showPopup) {
      setProgress(100)
      setTimer(10)

      const interval = setInterval(() => {
        setProgress((prevProgress) => Math.max(prevProgress - 10, 0)) // Reduce progress
        setTimer((prevTimer) => prevTimer - 1) // Countdown
      }, 1000)

      setTimeout(() => {
        clearInterval(interval)
        setShowPopup(false)
        fetchDeleteUserAccount({
          record_id: verifyOTPData?.data?.record_id,
          mobile_number: verifyOTPData?.data?.data?.mobile_numer,
          mem_id: verifyOTPData?.data?.data?.mem_id,
          user_name: verifyOTPData?.data?.data?.user_name,
          email: emailNew,
        } as any),
        console.log('Account Deleted!')
      }, 10000)

      return () => clearInterval(interval)
    }
  }, [showPopup])

  useEffect(() => {
    const accountPreferences = async () => {
      await dispatch(fetchAccountPreferences({ selectedLanguage }))
    }
    accountPreferences()
  }, [dispatch, selectedLanguage])

  return (
    <Container id="account-preference" className={styles.accountPreference}>
      {/* Home Button */}
      <ButtonUI
        variant="ghost"
        onClick={() => navigate('/privacy-policy')}
        className="mb-6 flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Home
      </ButtonUI>
      
      <Typography
        className={styles.accountPreferenceHeading}
        variant="h5"
        component="h1"
        gutterBottom
        sx={{
          fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
          textAlign: 'left',
        }}
      >
        {accountPreferencesData?.account_preference_title}
      </Typography>
      <Divider className={styles.preferenceDivider} orientation="vertical" />
      {!isOtpVerified ? (
        <>
          <Box className={styles.accountPreferenceContent}>
            <Typography
              variant="body2"
              dangerouslySetInnerHTML={{
                __html: accountPreferencesData?.account_preference_desc || '',
              }}
            ></Typography>
          </Box>
          <Typography className={styles.accountPreferenceBody2}>
            {accountPreferencesData?.account_preference_sub_dec}
          </Typography>

          <Box
            className={styles.preferenceSection1}
            sx={{
              mt: 2,
            }}
          >
            {/* Phone Input */}
            {!isEmail && (
              <div className={styles.phoneInputContainer}>
                <PhoneInput
                  placeholder={accountPreferencesData?.enter_mobile_txt}
                  country={'in'}
                  value={mobileNumber}
                  onChange={(value, country) => {
                    handleMobileNumber(value, country)
                  }}
                  disabled={isOtpSent}
                  enableSearch={true}
                  inputProps={{
                    name: 'mobile',
                    required: true,
                    autoFocus: true,
                  }}
                  inputStyle={{
                    width: '100%',
                    margin: '16px 0',
                    height: '45px',
                    color: 'black',
                    borderRadius: '6px',
                    paddingLeft: '90px',
                    paddingRight: '40px',
                    borderColor: mobileError ? '#D24B3D' : '#d8d8d8',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    backgroundColor: '#fff',
                  }}
                />
                {mobileError && (
                  <>
                    <CancelOutlinedIcon
                      onClick={clearMobileError}
                      className={styles.errorIcon}
                    />
                    <div className={styles.errorMessage}>
                      {mobileErrorMessage || 'Invalid number'}
                    </div>
                  </>
                )}
              </div>
            )}

            {isEmail && (
              <>
                <TextField
                  autoFocus
                  placeholder="Enter Email"
                  variant="outlined"
                  fullWidth
                  size="small"
                  value={email}
                  type="email"
                  error={emailNewError}
                  helperText={emailNewError ? emailNewErrorMessage : ''}
                  onChange={(event) => {
                    handleEmailValueChange(event.target.value)
                  }}
                  sx={{
                    position: 'relative',
                    backgroundColor: '#fff',
                    borderRadius: '6px',
                    margin: '16px 0',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '6px',
                      '& fieldset': {
                        borderColor: emailNewError
                          ? 'hsl(6, 78%, 57%)'
                          : '#d8d8d8',
                      },
                      '&:hover fieldset': {
                        borderColor: emailNewError
                          ? 'hsl(6, 78%, 57%)'
                          : '#1d1d1e',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: emailNewError
                          ? 'hsl(6, 78%, 57%)'
                          : '#1d1d1e',
                      },
                    },
                    '& input': {
                      padding: '12px 14px',
                    },
                    '& .MuiFormHelperText-root': {
                      position: 'absolute',
                      bottom: '-17px',
                      left: '-10px',
                      fontSize: '11px',
                      color: 'hsl(6, 78%, 57%)',
                      fontWeight: 500,
                      textAlign: 'left',
                      marginTop: '4px',
                    },
                  }}
                />
              </>
            )}

            {/* OTP Input Field */}

            {isOtpSent && (
              <>
                <TextField
                  placeholder="Enter OTP"
                  variant="outlined"
                  fullWidth
                  size="small"
                  value={otp}
                  onChange={(e) => dispatch(setOtp(e.target.value))}
                  inputProps={{ maxLength: 6 }}
                  error={otpError}
                  helperText={otpError ? otpErrorMessage : ''}
                  sx={{
                    position: 'relative',
                    backgroundColor: '#fff',
                    borderRadius: '6px',
                    margin: '0px 0 16px 0',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '6px',
                      '& fieldset': {
                        borderColor: otpError ? '#D24B3D' : '#d8d8d8',
                      },
                      '&:hover fieldset': {
                        borderColor: otpError ? '#D24B3D' : '#1d1d1e',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: otpError ? '#D24B3D' : '#1d1d1e',
                      },
                    },
                    '& input': {
                      padding: '12px 14px',
                    },
                    '& .MuiFormHelperText-root': {
                      position: 'absolute',
                      bottom: '-17px',
                      left: '-10px',
                      fontSize: '11px',
                      color: 'hsl(6, 78%, 57%)',
                      fontWeight: 500,
                      textAlign: 'left',
                      marginTop: '4px',
                    },
                  }}
                  InputProps={{
                    endAdornment: otpError && (
                      <CancelOutlinedIcon
                        onClick={clearOtpError}
                        sx={{
                          cursor: 'pointer',
                          color: '#D24B3D',
                          marginRight: '8px',
                        }}
                      />
                    ),
                  }}
                />
                <Typography className={styles.otpHelpText}>
                  Please enter the OTP sent to your mobile number.
                </Typography>
              </>
            )}

            {/* Button */}
            <Button
              variant="contained"
              className={styles.frAccountPreferenceBtn}
              fullWidth
              sx={{
                padding: '13px 16px',
                borderRadius: '6px',
                marginBottom: '10px',
                backgroundColor: 'white !important',
                color: '#1d1d1e !important',
                border: '1px solid #1d1d1e',
              }}
              onClick={() => handleToggleEmailMobile()} // Ensures function execution
            >
              {isEmail ? 'OTP via Mobile' : 'OTP via Email'}
            </Button>

            <Button
              variant="contained"
              className={styles.frAccountPreferenceBtn}
              fullWidth
              sx={{ padding: '13px 16px', borderRadius: '6px' }}
              onClick={isOtpSent ? handleVerifyOtp : handleSendOtp}
            >
              {isOtpSent ? 'Verify OTP' : accountPreferencesData?.send_otp_txt}
            </Button>

            {/* Resend OTP */}
            {isOtpSent && (
              <Button
                onClick={() => handleSendOtp()}
                sx={{
                  cursor: 'pointer',
                  color: '#1d1d1e',
                  padding: '10px 0 0',
                  textAlign: 'right',
                  fontSize: '12px',
                  textTransform: 'capitalize',
                }}
              >
                Resend OTP
              </Button>
            )}
          </Box>
        </>
      ) : (
        <>
          <Typography
            sx={{
              fontSize: {
                xs: '14px',
                md: '16px',
              },
              lineHeight: '24px',
              backgroundColor: '#fff1d3',
              padding: '1rem',
              borderRadius: '8px',
            }}
            className="account-selection"
          >
            {/* Please read the following carefully before you continue deleting the
            ffreedom app account and data associated with +91 96********99
            (Hemanth) */}
            {verifyOTPData?.data?.data?.page_text?.yello_box_content}
          </Typography>
          <Typography
            sx={{
              marginTop: '1.5rem',
              marginBottom: '1rem',
              paddingTop: '0.5rem',
              fontSize: {
                xs: '18px',
                md: '16px',
              },
              fontWeight: 600,
            }}
            variant="h6"
            gutterBottom
          >
            {verifyOTPData?.data?.data?.page_text?.account_preference_heading}
          </Typography>
          <Box>
            {preferences.map((preference) => (
              <Box
                key={preference.id}
                display="flex"
                alignItems="flex-start"
                gap={1}
                mb={1}
                component="label"
                sx={{
                  cursor: 'pointer',
                  marginBottom: '1.5rem',
                  fontSize: '14px',
                  color: '#282828',
                }}
              >
                <Checkbox
                  checked={preference.checked}
                  onChange={() => handleCheckboxChange(preference.id)}
                  sx={{
                    color: error && !preference.checked ? '#D24B3D' : 'black',
                    paddingTop: '0px',
                    '&.Mui-checked': {
                      color:
                        error && !preference.checked ? '#D24B3D' : '#1d1d1e', // Color when checked
                    },
                  }}
                />
                <Box>
                  <Typography
                    sx={{
                      flex: 1,
                      wordBreak: 'break-word',
                      lineHeight: 1.5,
                      fontSize: {
                        xs: '14px',
                        md: '16px',
                      },
                      color:
                        error && !preference.checked ? '#D24B3D' : '#1d1d1e',
                    }}
                    dangerouslySetInnerHTML={{
                      __html: preference.name || '',
                    }}
                  >
                    {/* {preference.name} */}
                  </Typography>
                  {preferences.length > 3 && preference.id == 2 && (
                    <Button
                      variant="outlined"
                      sx={{
                        padding: '13px 16px',
                        borderRadius: '6px',
                        marginTop: 2,
                        width: {
                          xs: '100%',
                          md: '60%',
                        },
                        color: ' #1d1d1e',
                        borderColor: ' #1d1d1e',
                      }}
                      // fullWidth
                      onClick={handleDownload}
                    >
                      Download Certificate
                    </Button>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
          <Button
            variant="contained"
            className={styles.preferencesDel}
            sx={{ padding: '13px 16px', borderRadius: '6px', fontSize: '14px' }}
            fullWidth
            onClick={handleDelete}
          >
            Delete My Account
          </Button>
          {error && (
            <Typography
              color="#D24B3D"
              sx={{
                mt: 1,
                fontSize: '14px',
                textAlign: 'left',
                marginTop: '1.5rem',
              }}
            >
              Select all the checkboxes before deleting your account.
            </Typography>
          )}
        </>
      )}
      {/* Success Dialog */}
      <Dialog
        open={openSuccessDialog}
        onClose={() => setOpenSuccessDialog(false)}
      >
        <DialogContent>
          {userType === 2 || userType === 3 ? (
            <Box sx={{ textAlign: 'center', padding: '20px' }}>
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: 'block', margin: '0 auto' }}
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#D24B3D"
                  strokeWidth="2"
                />
                <path
                  d="M8 8L16 16M16 8L8 16"
                  stroke="#D24B3D"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: 600,
                  mt: 2,
                  color: '#D24B3D',
                }}
              >
                Account Cannot Be Deleted
              </Typography>
              <Typography sx={{ fontSize: '14px', mt: 1, color: '#666' }}>
                {message}
              </Typography>
            </Box>
          ) : (
            <Typography>Account deleted successfully</Typography>
          )}
        </DialogContent>
      </Dialog>
      {/* Delete Account Popup */}
      <Dialog
        open={showPopup}
        onClose={() => setShowPopup(false)}
        sx={{
          '& .MuiDialog-paper': {
            width: { xs: '90%', sm: '70%', md: '400px' },
            position: { xs: 'absolute', sm: 'static' },
            top: { xs: '30%', sm: 'unset' },
            left: { xs: '50%', sm: 'unset' },
            transform: { xs: 'translate(-50%, -50%)', sm: 'none' },
            margin: '0',
          },
        }}
      >
        <DialogContent>
          {/* Circular Timer with Increasing  Progress */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={2}
          >
            <Box position="relative" display="inline-flex">
              <CircularProgress
                variant="determinate"
                value={100}
                size={40}
                thickness={2}
                sx={{ color: '#e0e0e0', position: 'absolute' }}
              />
              {/* progress bar (Increasing over time) */}
              <CircularProgress
                variant="determinate"
                value={((totalTime - timer + 1) / totalTime) * 100}
                size={40}
                thickness={2}
                sx={{ color: '#D24B3D' }}
              />
              {/* Timer inside the circle */}
              <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="h6" sx={{ color: '#D24B3D' }}>
                  {timer}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Typography
            sx={{ fontSize: '14px', marginTop: '1rem', marginBottom: '1rem' }}
            align="left"
          >
            Please give us a moment while we delete your account.
          </Typography>
          <Typography sx={{ fontSize: '14px' }} align="left">
            If you think this was a mistake, then click the cancel button to
            restore your account.
          </Typography>
        </DialogContent>

        <DialogActions>
          <Box width="100%" display="flex" justifyContent="center">
            <Button
              onClick={() => setShowPopup(false)}
              variant="outlined"
              sx={{ color: '#16a6a7', textTransform: 'capitalize' }}
            >
              Cancel
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default AccountPreferences
