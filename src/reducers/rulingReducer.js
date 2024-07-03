import { createSlice } from "@reduxjs/toolkit"
import rulingService from '../services/data'

const initialState = []

const rulingSlice = createSlice ({
  name: 'rulings',
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
    const rulings = await rulingService.getAll()
    dispatch(setRulings(rulings))
  }
}

export const vote = (id, voteType) => {
  return async dispatch => {
    const rulings = await rulingService.getAll()
    const rulingToChange = rulings.find(ruling => ruling.id === id)
    const newRuling = {
      ...rulingToChange,
      votes: {
        ...rulingToChange.votes,
        [voteType]: rulingToChange.votes[voteType] + 1
      }
    }
    const changedRuling = await rulingService.update(newRuling.id,newRuling)
    const newRulings = rulings.map(ruling => changedRuling.id === ruling.id ? changedRuling : ruling)
    dispatch(setRulings(newRulings))
  }
}

export default rulingSlice.reducer