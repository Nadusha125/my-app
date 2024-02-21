import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'



const API_URL = "https://fakestoreapi.com/products"


export const getProductsFromCategories = createAsyncThunk(
        'categoty/fetchProductFromCategories', async (category)=>{
            try {
            const {data} = await axios.get(
                category === 'all' ? API_URL : API_URL+`/category/${category}`)
            console.log('catege', data)
            return data
            }
            catch(e) {
                console.log('error', e)
            }
        })



    const initialState = {
        items: []
    }

    const productSlice = createSlice ({
        name: 'items',
        initialState, 
        reducers: {
            setSearchWord:(state, action) => {
                state.items = state.items.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()))
            }
        },
        extraReducers: (builder) => {
            builder.addCase(getProductsFromCategories.fulfilled, (state, action) => {
                state.items=action.payload
            })
        }
    })


    export const {setSearchWord} = productSlice.actions
    export default productSlice.reducer