import { createSlice } from "@reduxjs/toolkit"
import rulingService from '../services/data'

const initialState = []

const rulingSlice = createSlice ({
  name: 'anecdotes',
  initialState,
  reducers: {
    setRulings(state, action) {
      return action.payload
    }
  }  
})

export const {setRulings} = rulingSlice.actions

export const initializeRulings = () => {
  return async dispatch => {
    const anecdotes = await rulingService.getAll()
    dispatch(setRulings(anecdotes))
  }
}

export default rulingSlice.reducer