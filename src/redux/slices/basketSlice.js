import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    totalPrice:0,
    totalBasketCount:0,
    basketLS:[]
}

export const basketSlice = createSlice ({
    name:'basketShop', 
    initialState,
    reducers:{
        addProduct: (state, action) => {
            const {id, count, title, price, image} = action.payload  //диструктурировали (н-р:  чтобы везде не писать action.payload.title, -> title)

            let countPrice = count * price
            
            localStorage.setItem(id, JSON.stringify({
            title, 
            price: countPrice, 
            count,
            image}))
           
            const keyId = Object.keys(localStorage)

            state.basketLS = keyId.map((id) => {
            const product = JSON.parse(localStorage.getItem(id))
            return {id, ...product}
            })

            state.totalBasketCount = state.basketLS?.reduce((acc, item) => {return acc + item.count}, 0)
        },

        loadBasketFromLS: (state) => {
            const keyId = Object.keys(localStorage)

            state.basketLS = keyId.map((id) => {
            const product = JSON.parse(localStorage.getItem(id))
            return {id, ...product}
            }) 

            state.totalBasketCount = state.basketLS?.reduce((acc, item) => {return acc + item.count}, 0)

            state.totalPrice = state.basketLS.reduce((acc, product)=> {return acc + product.price}, 0)
        },

        // deleteProduct: (state, action) => {

        //     const {id, count, title, price, image} = action.payload 

        //     const keyId = Object.keys(localStorage)

        //     state.basketLS = keyId.map((id) => {
        //         const product = JSON.parse(localStorage.getItem(id))
        //         return {id, ...product}
        //         })

        //     state.deleteBasketCount = state.basketLS?filter(item => item.id !== action.payload)
        // },
    }
})

export const {addProduct, deleteProduct, loadBasketFromLS} = basketSlice.actions

export default basketSlice.reducer