import React from 'react';
import './Header.css';
import basket from './assets/basket.svg'
import {
    Link,
    useNavigate
  } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate()


    return (
        <div className='Header'>
            <button className='Main-btn' onClick={()=> {navigate('/')}}>На главную</button>
            <Link to="/" className='Title-shop'><h1>Online Shop</h1></Link>
            <Link to="/basket" className='Title-basket'><img className='Basket-icon' src={basket}/>0</Link>
        </div>
    )
}

export default Header