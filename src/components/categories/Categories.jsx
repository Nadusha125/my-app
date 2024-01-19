import { useEffect, useState } from "react"
import './Categories.css'

const Categories = ({productsCategory}) => {
    
const [categories, setCategories] = useState()

const [selectadCategory, setSelectadCategory] = useState('')


    useEffect(()=> {
        fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=>setCategories(json))
    }, [])

    const handleCategoty = (category) => {
        setSelectadCategory(category)
        productsCategory(category)
    }
   
    const categoriesList = categories?.map((category, idx) => 
    <option value = {category}>{category}</option>
    )

    return (
    <>
        <select
        className="Category"
        value={selectadCategory}
        onChange={(e) => {
            handleCategoty(e.target.value)}}
        >
        <option>all</option>
        {categoriesList}</select>
    </>
    )
}

export default Categories