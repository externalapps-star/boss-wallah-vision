import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define the shape of a single benefit detail
interface BenefitDetail {
  id: string
  image: string
  title: string
}

// Define the state shape
interface SelectedPackageState {
  selectedCourse: string
  selectedPackageId: string
  originalPrice: string
  packagePrice: string
  benifit_details: BenefitDetail[]
  subscriptionType: string
  subscriptionTitle: string
}

// Initial state
const initialState: SelectedPackageState = {
  selectedCourse: '',
  selectedPackageId: '',
  originalPrice: '',
  packagePrice: '',
  benifit_details: [],
  subscriptionType: '',
  subscriptionTitle: '',
}

// Create the slice
const packageSlice = createSlice({
  name: 'package',
  initialState,
  reducers: {
    // Reducer to set the selected package ID
    setSelectedCourse: (state, action: PayloadAction<string>) => {
      state.selectedCourse = action.payload
    },

    // Reducer to set the selected package ID
    setSelectedPackageId: (state, action: PayloadAction<string>) => {
      state.selectedPackageId = action.payload
    },
    // Reducer to set the original price
    setOriginalPrice: (state, action: PayloadAction<string>) => {
      state.originalPrice = action.payload
    },
    // Reducer to set the package price
    setPackagePrice: (state, action: PayloadAction<string>) => {
      state.packagePrice = action.payload
    },
    // Reducer to set the benefit details
    setBenefitDetails: (state, action: PayloadAction<BenefitDetail[]>) => {
      state.benifit_details = action.payload
    },
    // Reducer to set the subscription type
    setSubscriptionType: (state, action: PayloadAction<string>) => {
      state.subscriptionType = action.payload
    },
    setSubscriptionTitle: (state, action: PayloadAction<string>) => {
      state.subscriptionTitle = action.payload
    },
    // Reducer to reset the state to initial state
    resetPackageState: () => initialState,
  },
})

// Export actions
export const {
  setSelectedCourse,
  setSelectedPackageId,
  setOriginalPrice,
  setPackagePrice,
  setBenefitDetails,
  setSubscriptionType,
  setSubscriptionTitle,
  resetPackageState,
} = packageSlice.actions

// Export the reducer
export default packageSlice.reducer
