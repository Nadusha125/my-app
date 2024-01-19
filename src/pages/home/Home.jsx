import React, { useEffect, useState } from 'react';
import './Home.css'
import Product from '../../components/header/product/Product';
import Categories from '../../components/categories/Categories';

const API_URL = "https://fakestoreapi.com/products"

const Home = () => {

const [data, setData] = useState([])

const [basket, setBasket] = useState([])

const addProductToBasket = (product) => {
    console.log('product', product)

    setBasket([...basket, product])
    console.log('basket', basket)

}

useEffect(() => {
    fetch(API_URL)
    .then(res=>res.json())
    .then(json=>setData(json))
}, [])

const productsData = data.map(({title, price, id, image})=> 
<Product title = {title} 
price={price} 
key={id}
image={image}
id = {id}
addProductToBasket={addProductToBasket}/>)

const productsCategory = (category) => {

    console.log('category', category)
  
        fetch(category !== 'all'
            ? `${API_URL}/category/${category}`
            : `${API_URL}`)
        .then(res=>res.json())
        .then(json=>setData(json))
        // другой вариант:
    //     if(category === 'all') {
    //         fetch(API_URL)
    //         .then(res=>res.json())
    //         .then(json=>setData(json))
    //     } else {
    //         fetch(`${API_URL}/category/${category}`)
    //         .then(res=>res.json())
    //         .then(json=>setData(json))
    // }
}

    return (
<div className='Home-container'> 
    <Categories productsCategory={productsCategory}/>
    <div className='Product-container'>
        {data.length ? productsData : <h1>Загрузка...</h1>}
    </div>
</div>
)
}

export default Home







