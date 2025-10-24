import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface GetOtpResponseState {
  status: boolean
  message: string
}

interface UserInfoPayload {
  mobile: string
  email: string
  name: string
  dialCode: string
  subscription_status: string
  profile_image: string
}
export interface LoginDetailsState {
  userInfo: UserInfoPayload
  userName: string
  loginType: number
  otpResponse: {
    status: boolean
    message: string
  }
  otp: string
  firebaseToken: string
  memId: number
  bearerToken: string
  userState: string
}

const initialState: LoginDetailsState = {
  userInfo: {
    mobile: '',
    email: '',
    name: '',
    dialCode: '',
    subscription_status: '',
    profile_image: '',
  },
  userName: '',
  loginType: 0,
  otpResponse: {
    status: false,
    message: '',
  },
  otp: '',
  firebaseToken: '',
  memId: 0,
  bearerToken: '',
  userState: 'Karnataka',
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<UserInfoPayload>) {
      state.userInfo = action.payload
    },
    setUserName(state, action: PayloadAction<string>) {
      state.userName = action.payload
    },
    setUserState(state, action: PayloadAction<string>) {
      state.userState = action.payload
    },
    setLoginType(state, action: PayloadAction<number>) {
      state.loginType = action.payload
    },
    setOtpResponse(state, action: PayloadAction<GetOtpResponseState>) {
      state.otpResponse = action.payload
    },
    setOtp(state, action: PayloadAction<string>) {
      state.otp = action.payload
    },
    setFirebaseToken(state, action: PayloadAction<string>) {
      state.firebaseToken = action.payload
    },
    setMemId(state, action: PayloadAction<any>) {
      state.memId = action.payload
    },
    setBearerToken(state, action: PayloadAction<string>) {
      state.bearerToken = action.payload
    },
    resetLoginDetails(state) {
      return initialState
    },
  },
})

export const {
  setUserInfo,
  setUserName,
  setUserState,
  setLoginType,
  setOtpResponse,
  setOtp,
  setFirebaseToken,
  setMemId,
  setBearerToken,
  resetLoginDetails,
} = loginSlice.actions

export default loginSlice.reducer
