import {Link} from "react-router-dom";
import "./Product.css"
import { useDispatch } from 'react-redux';
import { addProduct, deleteProduct } from "../../redux/slices/basketSlice";
import React, { useEffect, useState } from 'react';


const Product = (props) => {
const {title, price, image, id} = props

const dispatch = useDispatch() 

const [productCount, setProductCount] = useState(0)

const addBasket = () => {
    setProductCount(productCount + 1)
}

useEffect(() => {
    const data = {id:id, title: title, price: price, count:productCount, image:image}
    if(productCount > 0) {
    dispatch(addProduct(data))
    }
}, [productCount])

const deleteFromBasket = () => {
    productCount >0 && setProductCount(productCount-1)
    const data = {id:id, title: title, price: price, count:0, image:image}
    dispatch(deleteProduct(data))
}


return (
    <div className="Product-item">
            <Link to={`/card/${id}`} className="Product-title">{title}</Link>
            {/* <h3>{price} $</h3> */}
            <h3>{Math.floor(price)} $</h3>
        <div className="Image-container">
            <img className="Image" src = {image} alt = {title}/>
        </div>
        <div className="Add-product" id="btn">
            <button className="Btn-add"
            onClick={addBasket}>+</button>
            <button className="Btn-add"
            onClick={deleteFromBasket}
            >-</button>
        </div>
        <div className="Count">Количество: {productCount ? productCount : 0}</div>
    </div>
)
}

export default Product

