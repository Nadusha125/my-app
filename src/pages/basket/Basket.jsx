import React from 'react';
import  './Basket.css'
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';




const Basket = () => {

    const productsBasket = useSelector((state) => state.basketShop.basketLS)

    const totalSum = useSelector((state) => state.basketShop.totalSum)

    const productBasketUI = productsBasket.map(({id, title, price, image, count}) => 
   <div key={id} className="Product-item">
   <Link to={`/card/${id}`} className="Product-title">{title}</Link>
   <h3>{price} $</h3>
   <div className="Image-container">
   <img className="Image" src = {image} alt = {title}/>
   </div>
   <div className="Count">Количество: {count}</div>
   </div>
   )
    

    

    return (
        <> 
        <div className='Product-container'>
            {productBasketUI}
        </div>
        <h2>Итоговая сумма: 
            {totalSum.toFixed(2)} 
            $</h2>
        </>
    )
};

export default Basket