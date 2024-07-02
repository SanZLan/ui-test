import { configureStore } from '@reduxjs/toolkit'

import rulingReducer from './reducers/rulingReducer'
import layoutReducer from './reducers/layoutReducer'

const store = configureStore({
  reducer: {
    rulings: rulingReducer,
    layout: layoutReducer
  }
})

export default store