import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface LanguageState {
  selectedLanguage: number
}

const initialState: LanguageState = {
  selectedLanguage: 24, // Default language ID
}

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setSelectedLanguage(state, action: PayloadAction<number>) {
      state.selectedLanguage = action.payload
    },
  },
})

export const { setSelectedLanguage } = languageSlice.actions
export default languageSlice.reducer
