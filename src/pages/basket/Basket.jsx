import React from 'react';
import  './Basket.css'
import {Link} from "react-router-dom";



const Basket = ({basket}) => {

const basketUI = basket.map((item) => 
<div key={item.id} className="Product-item">
<Link to={`/card/${item.id}`} className="Product-title">{item.title}</Link>
<h3>{item.price} $</h3>
<div className="Image-container">
<img className="Image" src = {item.image} alt = {item.title}/>
</div>
{/* <div className="Add-product" id="btn">
<button className="Btn-add"
onClick={addBasket}>+</button>
<button className="Btn-add"
onClick={deleteFromBasket}
>-</button>
</div> */}
<div className="Count">Количество: {item.count}</div>
</div>

/* <div key={item.id}>
    <h1>{item.title}</h1>
    <div>{item.price} $</div>
    <div>Количество: {item.count}</div>
</div>  */
)

    // console.log('basket', basket)
    return (<div className='Product-container'>{basketUI}</div>)
};

export default Basket