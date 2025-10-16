import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface userVerificationData {
  status: boolean
  message: string
  user_type: number
  mem_id?: number
  user_info?: any
}

interface verifyOTPData {
  data: {
    record_id: string
    data: {
      email: string
      mem_id: number
      language_id: string
      mobile_numer: string
      otp_verified: string
      subscription_status: boolean
      certiificate_path: string
      user_name: string
      user_info: {
        auth_mem_email: string
      }
      page_text: {
        account_preference_heading: string
        yello_box_content: string
        check_list_1: string
        check_list_2: string
        check_list_3: string
        check_list_1_paid_user: string
        check_list_2_paid_user: string
        check_list_3_paid_user: string
        check_list_4_paid_user: string
        check_list_5_paid_user: string
        check_list_6_paid_user: string
      }
    }
  }
  status: string
  statusCode: number
  message: string
}

interface OtpState {
  mobileNumber: string
  email: string
  countryDialCode: string
  isOtpSent: boolean
  otp: string
  isOtpVerified: boolean
  otpError: boolean
  otpErrorMessage: string
  emailError: boolean
  emailErrorMessage: string
  selectedLanguage: number
  preferences: { id: number; name: string; checked: boolean }[]
  accountPreferencesData: {
    account_preference_title: string
    account_preference_desc: string
    account_preference_sub_dec: string
    enter_mobile_txt: string
    send_otp_txt: string
    invalid_num_txt: string
  } | null
  userVerificationData: userVerificationData | null
  verifyOTPData: verifyOTPData | null
}

const initialState: OtpState = {
  mobileNumber: '',
  email: '',
  countryDialCode: '',
  isOtpSent: false,
  otp: '',
  otpError: false,
  otpErrorMessage: 'Incorrect OTP',
  emailError: false,
  emailErrorMessage: 'Incorrect Email',
  isOtpVerified: false,
  selectedLanguage: 24, // Default language ID
  preferences: [
    {
      id: 1,
      name: "I acknowledge that I will lose any Buy/Sell posts I've made on the Boss Wallah app's Earn tab, along with any comments or messages received for those posts.",
      checked: false,
    },
    {
      id: 2,
      name: "I acknowledge that I will lose any questions or discussion posts I've made on the Boss Wallah app's Connect tab, as well as any comments or messages received for those posts.",
      checked: false,
    },
    {
      id: 3,
      name: 'I confirm that I want to delete all my data on Boss Wallah app.',
      checked: false,
    },
  ],
  accountPreferencesData: null,
  userVerificationData: null,
  verifyOTPData: null,
}

const accountPreferencesSlice = createSlice({
  name: 'accountPreferences',
  initialState,
  reducers: {
    setMobileNumber(state, action: PayloadAction<string>) {
      state.mobileNumber = action.payload
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload
    },
    setCountryDialCode(state, action: PayloadAction<string>) {
      state.countryDialCode = action.payload
    },
    sendOtp(state, action: PayloadAction<boolean>) {
      state.isOtpSent = action.payload
    },
    setOtp(state, action: PayloadAction<string>) {
      state.otp = action.payload
    },
    setOtpError(state, action: PayloadAction<boolean>) {
      state.otpError = action.payload
    },
    setOtpErrorMessage(state, action: PayloadAction<string>) {
      state.otpErrorMessage = action.payload
    },
    setEmailError(state, action: PayloadAction<boolean>) {
      state.emailError = action.payload
    },
    setEmailErrorMessage(state, action: PayloadAction<string>) {
      state.emailErrorMessage = action.payload
    },
    verifyOtp(state) {
      if (state.otp.length === 6) {
        state.isOtpVerified = true
      } else {
        alert('Invalid OTP. Please enter a 6-digit OTP.')
      }
    },
    setSelectedLanguage(state, action: PayloadAction<number>) {
      state.selectedLanguage = action.payload
    },
    togglePreference(state, action: PayloadAction<number>) {
      const index = state.preferences.findIndex((p) => p.id === action.payload)
      if (index !== -1) {
        state.preferences[index].checked = !state.preferences[index].checked
      }
    },
    setAccountPreferencesData(
      state,
      action: PayloadAction<OtpState['accountPreferencesData']>,
    ) {
      state.accountPreferencesData = action.payload
    },
    setVerifyOtpData(state, action: PayloadAction<verifyOTPData>) {
      state.verifyOTPData = action.payload
      if (action.payload && action.payload.status === 'success') {
        state.mobileNumber =
          action.payload?.data?.data?.mobile_numer.toString() ||
          state.mobileNumber
        state.email =
          action.payload?.data?.data?.user_info?.auth_mem_email.toString() || state?.email || ''
        state.isOtpVerified =
          action.payload.message === 'OTP verified successfully'
        state.selectedLanguage = Number(action.payload.data.data.language_id)

        if (action.payload.data.data.page_text === null) {
          state.preferences = []
        } else {
          if (!action.payload.data.data.subscription_status) {
            const { check_list_1, check_list_2, check_list_3 } =
              action.payload.data.data.page_text

            state.preferences = [
              {
                id: 1,
                name: check_list_1,
                checked: false,
              },
              {
                id: 2,
                name: check_list_2,
                checked: false,
              },
              {
                id: 3,
                name: check_list_3,
                checked: false,
              },
            ]
          } else {
            const {
              check_list_1_paid_user,
              check_list_2_paid_user,
              check_list_3_paid_user,
              check_list_4_paid_user,
              check_list_5_paid_user,
              check_list_6_paid_user,
            } = action.payload.data.data.page_text

            state.preferences = [
              {
                id: 1,
                name: check_list_1_paid_user,
                checked: false,
              },
              {
                id: 2,
                name: check_list_2_paid_user,
                checked: false,
              },
              {
                id: 3,
                name: check_list_3_paid_user,
                checked: false,
              },
              {
                id: 4,
                name: check_list_4_paid_user,
                checked: false,
              },
              {
                id: 5,
                name: check_list_5_paid_user,
                checked: false,
              },
              {
                id: 6,
                name: check_list_6_paid_user,
                checked: false,
              },
            ]
          }
        }
      }
    },
    setUserVerificationData(
      state,
      action: PayloadAction<userVerificationData | null>,
    ) {
      if (action.payload) {
        state.userVerificationData = action.payload
      } else {
        state.userVerificationData = null
      }
    },
  },
})

export const {
  setMobileNumber,
  setEmail,
  setCountryDialCode,
  sendOtp,
  setOtp,
  setOtpError,
  setOtpErrorMessage,
  setEmailError,
  setEmailErrorMessage,
  verifyOtp,
  setSelectedLanguage,
  togglePreference,
  setAccountPreferencesData,
  setUserVerificationData,
  setVerifyOtpData,
} = accountPreferencesSlice.actions

export default accountPreferencesSlice.reducer
