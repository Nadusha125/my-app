import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    basket: []
}

export const basketSlice = createSlice ({
    name:'basket',
    initialState,
    reducers:{
        addProduct: (state, action) => {
            console.log(action)
        }
    }
})

export const {addProduct} = basketSlice.actions

export default basketSlice.reducer