import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import CategoriesContext from '../../contexts/CategoriesContext'

import ProductCard from '../../components/product-card/ProductCard'
import { CategoryTitle, CategoryCont } from './category.styles.jsx'

const Category = () => {
    const { dynamicRoute } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)

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