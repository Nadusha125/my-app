import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import basketReduser from './slices/basketSlice'
import productReduser from './slices/productsSlice'
import categoriesReduser from './slices/categoriesSlise'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    basketShop: basketReduser, //state.==basketShop==.basket === name:'basketShop' в basketSlice.js
    items: productReduser,
    categories: categoriesReduser,
  },
})