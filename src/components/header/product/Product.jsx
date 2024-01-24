import {Link} from "react-router-dom";
import "./Product.css"
import { useState } from "react";


const Product = (props) => {

const {title, price, image, id, addProductToBasket} = props

const [productCount, setProductCount] = useState(0)

const addBasket = () => {
    setProductCount(productCount + 1)

    const data = {id:id, title: title, price: price, count:1}

    addProductToBasket(data)
}

return (
    <div className="Product-item">
            <Link to={`/card/${id}`} className="Product-title">{title}</Link>
            <h3>{price} $</h3>
        <div className="Image-container">
            <img  src = {image} alt = {title}/>
        </div>
        <div className="Add-product" id="btn">
            <button className="Btn-add"
            onClick={addBasket}>+</button>
            <button className="Btn-add"
            onClick={()=> productCount >0 && setProductCount(productCount-1)}>-</button>
        </div>
        <div className="Count">Количество: {productCount}</div>
    </div>
)
}

export default Product

