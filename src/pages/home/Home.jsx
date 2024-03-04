import React, { useEffect, useState } from 'react';
import './Home.css'
import Product from '../../components/product/Product';
import Categories from '../../components/categories/Categories';
import { useDispatch, useSelector } from 'react-redux';
import {  getProductsFromCategories } from '../../redux/slices/productsSlice';
import {loadBasketFromLS} from '../../redux/slices/basketSlice'




const API_URL = "https://fakestoreapi.com/products"

const Home = () => {
    
const dispatch = useDispatch()

useEffect(() => dispatch(loadBasketFromLS()), [])

const products = useSelector((state) => state.items.items)

const category = useSelector((state) => state.categories.selectedCategory)


useEffect(() => {
   dispatch(getProductsFromCategories(category))
}, [category])



const productsData = products.map(({title, price, id, image}) => 
<Product title = {title} 
price={price} 
key={id}
image={image}
id = {id}/>)


    return (
        <>  
    <Categories/>
    <div className='Product-container'>
        {products.length ? productsData : <h1>Загрузка...</h1>}
    </div>
        </>)
}

export default Home







