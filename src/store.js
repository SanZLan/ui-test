import { configureStore } from '@reduxjs/toolkit'

import rulingReducer from './reducers/rulingReducer'

const store = configureStore({
  reducer: {
    rulings: rulingReducer
  }
})

export default store