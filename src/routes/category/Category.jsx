import {  useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCategoriesMap } from '../../redux/selectors/categorySelector'
import ProductCard from '../../components/product-card/ProductCard'
import { CategoryTitle, CategoryCont } from './category.styles.jsx'

const Category = () => {
    const  categoriesMap  = useSelector(selectCategoriesMap)
    const { dynamicRoute } = useParams()
    const [showProducts, setShowProducts] = useState([])

    useEffect(() => {
        setShowProducts(categoriesMap[dynamicRoute])
    }, [categoriesMap, dynamicRoute])


    return (
        <>
            <CategoryTitle>{dynamicRoute}</CategoryTitle>
            <CategoryCont>
                {showProducts && showProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </CategoryCont>
        </>
    )
}

export default Category