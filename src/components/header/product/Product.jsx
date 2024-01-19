import {Link} from "react-router-dom";
import "./Product.css"
import { useState } from "react";


const Product = ({title, price, image, id}) => {

const [count, setCount] = useState(0)

return (
    <div className="Product-item">
            <Link to={`/card/${id}`} className="Product-title">{title}</Link>
            <h3>{price} $</h3>
        <div className="Image-container">
            <img  src = {image} alt = {title}/>
        </div>
        <div className="Add-product" id="btn">
            <button className="Btn-add"
            onClick={()=> setCount(count+1)}>+</button>
            <button className="Btn-add"
            onClick={()=> count >0 && setCount(count-1)}>-</button>
        </div>
        <div className="Count">Количество: {count}</div>
    </div>
)
}

export default Product

