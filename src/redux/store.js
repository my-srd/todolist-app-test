import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import todolist from './reducers'

const reducer = combineReducers({
   todolist
})
const store = configureStore({
  reducer,
  
})

export default store;