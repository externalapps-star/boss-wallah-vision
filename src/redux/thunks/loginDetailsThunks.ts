import { AppDispatch } from '../store'

import {
  GetOtpResponseState,
  setFirebaseToken,
  setLoginType,
  setMemId,
  setOtpResponse,
  setUserInfo,
} from '../slices/loginDetailsSlice'
import {
  setPaymentScreenDetails,
  setStartLearningDetails,
} from '../slices/PaymentSlice'
import { exit } from 'process'

export const fetchSendOtp = (payload: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch(
      setUserInfo({
        mobile:
          payload.mobileNumber !== undefined ? payload.mobileNumber : undefined,
        email: payload.email !== undefined ? payload.email : undefined,
        name: payload.name !== undefined ? payload.name : undefined,
        dialCode: payload.dialCode !== undefined ? payload.dialCode : undefined,
        subscription_status:
          payload.subscription_status !== undefined
            ? payload.subscription_status
            : undefined,
        profile_image:
          payload.profile_image !== undefined
            ? payload.profile_image
            : undefined,
      }),
    )
    dispatch(setLoginType(payload.loginType))
    const response = await fetch(
      `${import.meta.env.VITE_LOGIN_API_URL}/auth/get_otp`,
      {
        method: 'POST',
        body: new URLSearchParams({
          lang_id: payload.selectedLanguage,
          mobile_number: payload.mobileNumber || '',
          email: payload.email || '',
          login_type: payload.loginType,
          dial_code: payload.dialCode,
          is_resend: payload.is_resend,
        } as any).toString(),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    )
    const res = await response.json()
    const data = res.data as GetOtpResponseState
    dispatch(setOtpResponse(data))
  } catch (error) {
    console.error('Failed to fetch explore categories', error)
  } finally {
    //   dispatch(setLoading(false))
  }
}

export const fetchLoginDetails =
  (payload: any) => async (dispatch: AppDispatch) => {
    const response = await fetch(
      `${import.meta.env.VITE_LOGIN_API_URL}/auth/login`,
      {
        method: 'POST',
        body: new URLSearchParams({
          lang_id: payload.selectedLanguage,
          mobile_number: payload.mobileNumber || '',
          email: payload.email || '',
          user_name: payload.user_name || '',
          otp_code: payload.otp_code,
          dial_code: payload.dialCode,
          state_id: 0,
          otp_verified:
            payload.loginType == '1'
              ? payload.dialCode && payload.dialCode === '+91'
                ? false
                : true
              : false,
          login_type: payload.loginType,
          platform_type: 2, // should be 1 cause querying it from webapp
          coupon_id: 0,
        } as any).toString(),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    )
    const res = await response.json()
    if (res.status === 'success') {
      dispatch(
        setUserInfo({
          mobile:
            res.data.mobile_number != null
              ? res.data.mobile_number.toString()
              : '',
          email:
            res.data.user_email != null ? res.data.user_email.toString() : '',
          name: res.data.user_name != null ? res.data.user_name.toString() : '',
          dialCode:
            res.data.dialCode != null ? res.data.dialCode.toString() : '',
          subscription_status:
            res.data.subscription_status != null
              ? res.data.subscription_status.toString()
              : '',
          profile_image:
            res.data.profile_image != null ? res.data.profile_image : '',
        }),
      )
      dispatch(setFirebaseToken(res.data.firebase_token))
      dispatch(setMemId(res.data.mem_id))
      return 'data' in res ? res.data : res
    }
    if (res.status === 'error') {
      return 'data' in res ? res.data : res
    }
  }

export const fetchCreateOrderData =
  (
    lang_id: any = 24,
    bearer_token: string,
    memId: number,
    package_id: string,
    selectedCourse: string,
    handlePage: (page: string, activeStepper: number) => boolean,
  ) =>
  async (dispatch: AppDispatch) => {
    const response = await fetch(
      package_id == '67'
        ? `${import.meta.env.VITE_PAYMENT_API_URL}/api/v1/purchase/checkout_subscription_payment`
        : `${import.meta.env.VITE_PAYMENT_API_URL}/api/v1/purchase/checkout_prime_payment`,
      {
        method: 'POST',
        body: new URLSearchParams({
          mem_id: memId,
          app_language: lang_id,
          lang_id: lang_id,
          coupon_id: 1,
          package_id: package_id,
          course_id: selectedCourse,
        } as any).toString(),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${bearer_token}`,
        },
      },
    )
    const res = await response.json()
    return res
    if (res.show_payment_screen) {
      dispatch(setPaymentScreenDetails(res.payment_screen_details))
      handlePage('Payment', 2)
    } else {
      if (res.show_start_learning) {
        dispatch(setStartLearningDetails(res.start_learning_details))
        handlePage('Start Learning Now', 3)
      }
    }
  }

export const fetchUserData =
  (id_token: string, memId: number) => async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/customer_info_v2`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${id_token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )

      const res = await response.json()
      return res
    } catch (error) {
      console.error('Error fetching user data:', error)
      return null
    }
  }
