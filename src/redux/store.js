import { configureStore } from '@reduxjs/toolkit'
import citySliceReducer from './citySlice'

export const store = configureStore({
  reducer: {
      city:citySliceReducer
  },
})