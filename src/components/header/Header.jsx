import React, { useState } from 'react';
import './Header.css';
import basket from './assets/basket.svg'
import {
    Link,
    useNavigate
  } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { setSearchWord, getProductsFromCategories } from '../../redux/slices/productsSlice';



const Header = () => {

const basketCount = useSelector(state => state.basketShop.totalBasketCount)

const dispatch = useDispatch()

const handleChange = (e) => {
if(e.target.value === '') {
    dispatch(getProductsFromCategories('all'))
} else {
    dispatch(setSearchWord(e.target.value))
}
}

const navigate = useNavigate()



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
            <Link to="/basket" className='Title-basket'><img className='Basket-icon' src={basket}/>{basketCount}</Link>
        </div>
    )
}

export default Header