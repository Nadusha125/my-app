import React, { useEffect, useState } from 'react';
import './Home.css'
import Product from '../../components/product/Product';
import Categories from '../../components/categories/Categories';
import { useSelector } from 'react-redux';

const API_URL = "https://fakestoreapi.com/products"

const Home = ({searchProduct}) => {
    // console.log('searchProduct', searchProduct)

const [data, setData] = useState([])
// console.log('data', data)

const message = useSelector((state) => state.counter.mess)

useEffect(() => {
    if(searchProduct.length>0) {
    const resultSearchProduct = data.filter(item => item.title.toLowerCase().includes(searchProduct.toLowerCase()))
    console.log('resultSearchProduct', resultSearchProduct)
    setData(resultSearchProduct)
} else {
        fetch(API_URL)
        .then(res=>res.json())
        .then(json=>setData(json))
}
}, [searchProduct])


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
/>)

const productsCategory = (category) => {

    // console.log('category', category)
  
        fetch(category !== 'all'
            ? `${API_URL}/category/${category}`
            : `${API_URL}`)
        .then(res=>res.json())
        .then(json=>setData(json))
}

    return (
        <>
        
{/* {console.log('basket', basket)} */}
    <Categories productsCategory={productsCategory}/>
    <h1>{message}</h1>
    <div className='Product-container'>
        {data.length ? productsData : <h1>Загрузка...</h1>}
    </div>

        </>

)
}

export default Home







