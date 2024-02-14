import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    basket: [],  
    totalSum: 0,
    totalBasketCount:0,
}

export const basketSlice = createSlice ({
    name:'basketShop', 
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

            state.totalSum = state.basket.reduce((acc, item) => {return acc + item.price}, 0);

            state.totalBasketCount = state.basket.reduce((acc, item) => {return acc + item.count}, 0)
            console.log('totalBasketCount', state.totalBasketCount)
            console.log('basket', state.basket)
        },


        deleteProduct: (state, action) => {
            let findProductById = state.basket.find(item => item.id===action.payload.id)

            if(findProductById) {
                findProductById.count--;
                findProductById.price-=action.payload.price
            }

            state.totalBasketCount--
        },

    }
})

export const {addProduct, deleteProduct} = basketSlice.actions

export default basketSlice.reducer