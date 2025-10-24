import { configureStore } from '@reduxjs/toolkit'
import accountPreferencesReducer from './slices/accountPreferencesSlice'
import languageReducer from './slices/languageSlice'
import loginReducer from './slices/loginDetailsSlice'
import paymentReducer from './slices/PaymentSlice'
import packageReducer from './slices/packageSlice'

// Function to create the store
export const makeStore = () =>
  configureStore({
    reducer: {
      accountPreferences: accountPreferencesReducer,
      language: languageReducer,
      login: loginReducer,
      payment: paymentReducer,
      package: packageReducer,
    },
  })

const store = makeStore()

// Create the store instance
export default store

// Types for RootState and AppDispatch
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
