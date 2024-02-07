import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import basketReduser from './slices/basketSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    basketShop: basketReduser, //state.==basketShop==.basket === name:'basketShop' в basketSlice.js
  },
})