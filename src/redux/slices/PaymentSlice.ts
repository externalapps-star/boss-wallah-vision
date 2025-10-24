import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define the state shape
interface paymentDetails {
  paymentScreenDetails: any
  startLearningDetails: any
  loading: boolean
}

// Initial state
const initialState: paymentDetails = {
  paymentScreenDetails: {},
  startLearningDetails: {},
  loading: false,
}

// Create the slice
const PaymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPaymentScreenDetails: (state, action: PayloadAction<any>) => {
      state.paymentScreenDetails = action.payload
    },

    setStartLearningDetails: (state, action: PayloadAction<any>) => {
      state.startLearningDetails = action.payload
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },

    // Reducer to reset the state to initial state
    resetPackageState: () => initialState,
  },
})

// Export actions
export const {
  setPaymentScreenDetails,
  setStartLearningDetails,
  setLoading,
  resetPackageState,
} = PaymentSlice.actions

// Export the reducer
export default PaymentSlice.reducer
