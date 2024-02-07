import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    basket: []  // state.basketShop.BASKET
}

export const basketSlice = createSlice ({
    name:'basketShop', //state.==basketShop==.basket === basketShop.basketReduser в store.js
    initialState,
    reducers:{
        addProduct: (state, action) => {
            let findProductById = state.basket.find(item => item.id === action.payload.id)

            if(findProductById) {
                findProductById.count++;
                findProductById.price+=action.payload.price
            } else {
                state.basket.push({...action.payload})
            }
        },
        deleteProduct: (state, action) => {
            let findProductById = state.basket.find(item => item.id===action.payload.id)

            if(findProductById) {
                findProductById.count--;
                findProductById.price-=action.payload.price
            }
        }
    }
})

export const {addProduct, deleteProduct} = basketSlice.actions

export default basketSlice.reducer