import React from 'react';
import  './Basket.css'
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';



const Basket = () => {

const basket = useSelector((state) => state.basketShop.basket)

const basketUI = basket?.map(({id, title, price, image, count}) => 
(<div key={id} className="Product-item">
<Link to={`/card/${id}`} className="Product-title">{title}</Link>
<h3>{price} $</h3>
<div className="Image-container">
<img className="Image" src = {image} alt = {title}/>
</div>
<div className="Count">Количество: {count}</div>
{/* <div className="Add-product" id="btn">
<button className="Btn-add"
onClick={addBasket}>+</button>
<button className="Btn-add"
onClick={deleteFromBasket}
>-</button>
</div> */}
</div>))

    // console.log('basket', basket)
    return (<div className='Product-container'>
       {basketUI}
        </div>)
};

export default Basket