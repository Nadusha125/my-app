import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    basket: [],  
    totalSum: 0,
    totalBasketCount:0,
    basketCount:0,
    basketLS:[]
}

export const basketSlice = createSlice ({
    name:'basketShop', 
    initialState,
    reducers:{
        addProduct: (state, action) => {
            const {id, count, title, price, image} = action.payload  //диструктурировали (н-р:  чтобы везде не писать action.payload.title, -> title)

            let findProductById = state.basket.find(item => item.id === id)

            if(findProductById) {
                findProductById.count++;
                findProductById.price+=action.payload.price
            } else {
                state.basket.push({...action.payload})
            }

            // state.totalSum = state.basket.reduce((acc, item) => {return acc + item.price}, 0);

            state.totalBasketCount = state.basket.reduce((acc, item) => {return acc + item.count}, 0)
            
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


                state.totalSum = state.basketLS.reduce((acc, product)=> {return acc + product.price}, 0)
        },


        deleteProduct: (state, action) => {

            let findProductById = state.basket.find(item => item.id===action.payload.id)
            if(findProductById) {
                findProductById.count--;
                findProductById.price-=action.payload.price
            }
            state.totalBasketCount > 0 && 
            state.totalBasketCount--
        },
    }
})

export const {addProduct, deleteProduct, currentCount} = basketSlice.actions

export default basketSlice.reducer