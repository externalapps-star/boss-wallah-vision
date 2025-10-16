import { AppDispatch } from '../store'
import {
  sendOtp,
  setAccountPreferencesData,
  setOtpError,
  setOtpErrorMessage,
  setUserVerificationData,
  setVerifyOtpData,
  verifyOtp,
} from '../slices/accountPreferencesSlice'

export const fetchAccountPreferences =
  (payload: { selectedLanguage: number }) => async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(
        `https://bw-account-deletion-service-prod-262620024912.asia-south1.run.app/api/account-deletion/account_preference`,
        {
          method: 'POST',
          body: new URLSearchParams({
            lang_id: payload.selectedLanguage.toString(),
          }).toString(),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )

      const res = await response.json()

      if (res.status) {
        dispatch(setAccountPreferencesData(res.data))
      }
    } catch (error) {
      console.error('Failed to fetch account preferences:', error)
    }
  }

export const fetchUserVerification =
  (payload: {
    selectedLanguage: number
    mobileNumber: string
    email: string
    countryDialCode: string
  }) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(
        `https://bw-account-deletion-service-prod-262620024912.asia-south1.run.app/api/account-deletion/user_verification`,
        {
          method: 'POST',
          body: new URLSearchParams({
            lang_id: payload.selectedLanguage.toString(),
            mobile_number: payload.mobileNumber,
            email: payload.email,
            country_dial_code: payload.countryDialCode,
          }).toString(),

          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )

      const res = await response.json()
      if (res.status) {
        if(res.data.user_type === 2 || res.data.user_type === 3){
          dispatch(sendOtp(false))
        }else{
          dispatch(sendOtp(true))
        }
        dispatch(setUserVerificationData(res))
        if(!res.data.user_info){
          return {
            userType: res.data?.user_type || '',
            message: res.data?.response_message || '',
          }
        }else{
          return {
            userType: res.data?.user_type || '',
            message: res.data?.response_message || '',
            email: res.data.user_info.auth_mem_email || ''
          };
        }
      }
    } catch (error) {
      console.error('Failed to fetch user verification:', error)
    }
  }

export const fetchVerifyOtp =
  (payload: {
    selectedLanguage: number
    mobileNumber: string
    email: string
    otp: string
  }) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(
        `https://bw-account-deletion-service-prod-262620024912.asia-south1.run.app/api/account-deletion/verify_otp`,
        {
          method: 'POST',
          body: new URLSearchParams({
            language_id: payload.selectedLanguage?.toString() || '24',
            mobile_number: payload.mobileNumber || '',
            email: payload.email || '',
            otp: payload.otp,
          }).toString(),

          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      const res = await response.json()
      if (res.status === 'success') {
        dispatch(setOtpError(false))
        dispatch(setOtpErrorMessage(''))
        dispatch(verifyOtp())
        dispatch(setVerifyOtpData(res))
      } else if (res.status === 'error') {
        dispatch(setOtpError(true))
        dispatch(setOtpErrorMessage(res.message))
      }
    } catch (error) {
      console.error('Failed to fetch user verification:', error)
    }
  }

export const fetchDeleteUserAccount =
  (payload: {
    id_token: string
    record_id: number
    mobile_number: string
    mem_id: string
    user_name: string
    mem_email: string
  }) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(
        `https://bw-account-deletion-service-prod-262620024912.asia-south1.run.app/api/account-deletion}/delete_user_account`,
        {
          method: 'POST',
          body: new URLSearchParams({
            record_id: payload.record_id.toString(),
            mobile_number: payload.mobile_number,
            mem_id: payload.mem_id,
            user_name: payload.user_name,
            mem_email: payload.mem_email,
          }).toString(),
          headers: {
            // 'Authorization': `Bearer ${payload.id_token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      const res = await response.json()
      if (res.status) {
        // dispatch(setUserVerificationData(res.data))
      }
    } catch (error) {
      alert('Failed to delete user')
      console.error('Failed to delete user:', error)
    }
  }
