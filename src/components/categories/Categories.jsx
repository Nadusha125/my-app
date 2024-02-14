import { useEffect, useState } from "react"
import './Categories.css'
import { getCategories, setSelectedCategory } from "../../redux/slices/categoriesSlise"
import { useDispatch, useSelector} from 'react-redux';


const Categories = () => {
    

const [selCategory, setSelCategory] = useState('')

const dispatch = useDispatch()

const categories = useSelector((state) => state.categories.items)

    useEffect(()=> {
        dispatch(getCategories())
    }, [])

    const handleCategoty = (category) => {
        setSelCategory(category)
        dispatch(setSelectedCategory(category))
        // console.log('category', category)
    }
   

    const categoriesList = categories?.map((category, idx) => 
    <option key = {idx} value = {category}>{category}</option>
    )

    return (
    <>
        <select
        className="Category"
        value={selCategory}
        onChange={(e) => {
            handleCategoty(e.target.value)}}>
        <option>all</option>
        {categoriesList}</select>
    </>
    )
}

export default Categories