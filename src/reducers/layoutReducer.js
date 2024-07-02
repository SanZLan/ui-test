import { createSlice } from "@reduxjs/toolkit"

const initialState = 'Grid'

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setLayout(state, action) {
      return action.payload
    }
  }
})

export const { setLayout } = layoutSlice.actions
export default layoutSlice.reducer