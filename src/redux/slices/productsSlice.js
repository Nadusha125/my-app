import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'



// const API_URL = "https://fakestoreapi.com/products"


export const getProducts = createAsyncThunk(
    'items/fetchProducts', async ()=>{
        try {
        const {data} = await axios.get('https://fakestoreapi.com/products')
        console.log('response', data)
        return data
        }
        catch(e) {
            console.log('error', e)
        }
    })


export const getProductFromCategories = createAsyncThunk(
        'categoty/fetchProductFromCategories', async (category)=>{
            try {
            const {data} = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
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
            builder.addCase(getProducts.fulfilled, (state, action) => {
                state.items=action.payload
            })
            builder.addCase(getProductFromCategories.fulfilled, (state, action) => {
                state.items=action.payload
            })
        }
    })


    export const {setSearchWord} = productSlice.actions
    export default productSlice.reducer