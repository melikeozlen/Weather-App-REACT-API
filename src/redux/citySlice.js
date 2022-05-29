import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  city_name: '',
  
}

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {

    cityNameChange: (state, action) => {
      const { cityName } = action.payload;
      state.city_name = cityName;
    },
  },
})

export const { cityNameChange } = citySlice.actions

export default citySlice.reducer