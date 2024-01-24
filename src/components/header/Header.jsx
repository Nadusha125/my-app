import React, { useState } from 'react';
import './Header.css';
import basket from './assets/basket.svg'
import {
    Link,
    useNavigate
  } from "react-router-dom";


const Header = ({searchData}) => {
const [searchProduct, setSearchProduct] = useState('')

const handleChange = (e) => {
console.log('handleChange', e.target.value)
setSearchProduct(e.target.value)
searchData(e.target.value)
}

const navigate = useNavigate()

console.log('searchProduct', searchProduct)
    return (
        <div className='Header'>
            <button className='Main-btn' onClick={()=> {navigate('/')}}>На главную</button>
            <div>
                <input 
                placeholder='Search'
                // value={searchProduct}
                className='Input-search'
                onChange={handleChange}/>
            </div>
            <Link to="/" className='Title-shop'><h1>Online Shop</h1></Link>
            <Link to="/basket" className='Title-basket'><img className='Basket-icon' src={basket}/>0</Link>
        </div>
    )
}

export default Header