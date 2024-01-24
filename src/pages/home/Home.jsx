import React, { useEffect, useState } from 'react';
import './Home.css'
import Product from '../../components/header/product/Product';
import Categories from '../../components/categories/Categories';

const API_URL = "https://fakestoreapi.com/products"

const Home = ({searchProduct}) => {
    console.log('searchProduct', searchProduct)

const [data, setData] = useState([])

const [basket, setBasket] = useState([])

useEffect(() => {
    const resultSearchProduct = data.filter(item => item.title.toLowerCase().includes(searchProduct.toLowerCase()))

    // if(resultSearchProduct) {
    //     setData(resultSearchProduct) 
    // } else {
    //     setData(data)
    // }
    setData(resultSearchProduct)
}, [searchProduct])



const addProductToBasket = (product) => {
    let findProductById = basket.find(item => item.id === product.id)

    if(findProductById) {
        findProductById.count++;
        findProductById.price+=product.price
    } else {
        setBasket([...basket, product])
    }
}

const deleteProductFromBasket = (id, price) => {
    let findProductById = basket.find(item => item.id === id)
    if(findProductById) {
        findProductById.count--;
        findProductById.price-= price
    }
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
addProductToBasket={addProductToBasket}
deleteProductFromBasket={deleteProductFromBasket}/>)

const productsCategory = (category) => {

    console.log('category', category)
  
        fetch(category !== 'all'
            ? `${API_URL}/category/${category}`
            : `${API_URL}`)
        .then(res=>res.json())
        .then(json=>setData(json))
}

    return (
        
<div className='Home-container'> 
{console.log('basket', basket)}
    <Categories productsCategory={productsCategory}/>
    <div className='Product-container'>
        {data.length ? productsData : <h1>Загрузка...</h1>}
    </div>
</div>
)
}

export default Home







