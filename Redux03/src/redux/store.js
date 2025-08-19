// Step1. Configure the store 

import { configureStore } from '@reduxjs/toolkit'
import counterSlice  from './CreateSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice
  },
})