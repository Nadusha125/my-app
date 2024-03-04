import {Link} from "react-router-dom";
import "./Product.css"
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct } from "../../redux/slices/basketSlice";
import React, { useEffect, useState } from 'react';


const Product = (props) => {
const {title, price, image, id} = props

const dispatch = useDispatch() 

const [count, setCount] = useState(0)

const basketLS = useSelector((state) => state.basketShop.basketLS)

const findProductFromBasket = basketLS.find(item => item.id ==id)

useEffect(() => {
    if(findProductFromBasket) {
        setCount(findProductFromBasket.count)
    }
}, [])

const addBasket = () => {
    setCount(count + 1)
}

useEffect(() => {
    const data = {id:id, title: title, price: price, count:count, image:image}
    count > 0 && dispatch(addProduct(data))
}, [count])

// const deleteFromBasket = () => {
//     count >0 && setCount(count-1)
//     const data = {id:id, title: title, price: price, count:0, image:image}
//     dispatch(deleteProduct(data))
// }


return (
    <div className="Product-item">
            <Link to={`/card/${id}`} className="Product-title">{title}</Link>
            <h3>{price} $</h3>
        <div className="Image-container">
            <img className="Image" src = {image} alt = {title}/>
        </div>
        <div className="Add-product" id="btn">
            <button className="Btn-add"
            onClick={addBasket}>+</button>
            <button className="Btn-add"
            // onClick={deleteFromBasket}
            >-</button>
        </div>
        <div className="Count">Количество: {count ? count : 0}</div>
    </div>
)
}

export default Product

