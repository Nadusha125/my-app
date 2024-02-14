import { configureStore } from '@reduxjs/toolkit'
import basketReduser from './slices/basketSlice'
import productReduser from './slices/productsSlice'
import categoriesReduser from './slices/categoriesSlise'


export const store = configureStore({
  reducer: {
    basketShop: basketReduser, //state.==basketShop==.basket === name:'basketShop' в basketSlice.js
    items: productReduser,
    categories: categoriesReduser,
  },
})