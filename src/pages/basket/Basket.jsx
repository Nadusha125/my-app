import React from 'react';
import  './Basket.css'
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, deleteProduct } from "../../redux/slices/basketSlice";



const Basket = () => {

const basket = useSelector((state) => state.basketShop.basket)
const totalSum = useSelector((state) => state.basketShop.totalSum)



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

    
    return (
        <> 
        <div className='Product-container'>
       {basket.length  ? basketUI   : <h2>Корзина пуста</h2>} 
        </div>
        <div>{totalSum} $</div>
        </>
    )
};

export default Basket