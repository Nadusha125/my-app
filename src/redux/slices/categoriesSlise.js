import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const getCategories = createAsyncThunk(
    'categoty/fetchCategories', async ()=>{
        try {
        const {data} = await axios.get('https://fakestoreapi.com/products/categories')
        console.log('catege', data)
        return data
        }
        catch(e) {
            console.log('error', e)
        }
    })


    const initialState = {
        items: [],
        selectedCategory:'all',
    }

    const categoriesSlice = createSlice ({
        name: 'categories',
        initialState, 
        reducers: {
                setSelectedCategory:(state, action) => {
                    state.selectedCategory = action.payload
                }
        },
         extraReducers: (builder) => {
            builder.addCase(getCategories.fulfilled, (state, action) => {
                state.items=action.payload
            })
        }
    })


    export const {setSelectedCategory} = categoriesSlice.actions
    export default categoriesSlice.reducer