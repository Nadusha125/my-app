import React, { useEffect, useState } from 'react';
import './Home.css'
import Product from '../../components/product/Product';
import Categories from '../../components/categories/Categories';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, getProductFromCategories } from '../../redux/slices/productsSlice';




const API_URL = "https://fakestoreapi.com/products"

const Home = ({searchProduct}) => {
    // console.log('searchProduct', searchProduct)
const dispatch = useDispatch()

const [data, setData] = useState([])
// console.log('data', data)


const products = useSelector((state) => state.items.items)

const category = useSelector((state) => state.categories.selectedCategory)

useEffect(() => {
        if(searchProduct.length>0) {
        const resultSearchProduct = data.filter(item => item.title.toLowerCase().includes(searchProduct.toLowerCase()))
        console.log('resultSearchProduct', resultSearchProduct)
        setData(resultSearchProduct)
    } 
    else {
            fetch(API_URL)
            .then((res)=>res.json())
            .then((json)=>setData(json))
            .catch((err) => console.log(err))
    }
    }, 
    [searchProduct])



useEffect(() => {
    category === 'all'
    ? dispatch(getProducts())
    : dispatch(getProductFromCategories(category))
}, [category])



const productsData = products.map(({title, price, id, image}) => 
<Product title = {title} 
price={price} 
key={id}
image={image}
id = {id}/>)


    return (
        <>  
{/* {console.log('basket', basket)} */}
    <Categories 
    // productsCategory={productsCategory}
    />
    <div className='Product-container'>
        {products.length ? productsData : <h1>Загрузка...</h1>}
    </div>
        </>)
}

export default Home







