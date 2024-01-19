import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';


const Card = () => {
    const {id} = useParams();
    // console.log({id})
    const [product, setProduct]= useState('')
    // console.log(product)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/" + id)
        .then(res=>res.json())
        .then(json=>setProduct(json))
    }, [])


    return (
    <div>
        <h2>{product.title}</h2>
        <div>{product.price}</div>
        <img  src={product.image} alt='image'/>
    </div>)
};

export default Card