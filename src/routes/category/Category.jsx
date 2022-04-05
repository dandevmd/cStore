import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import CategoriesContext from '../../contexts/CategoriesContext'

import ProductCard from '../../components/product-card/ProductCard'
import './category.styles.scss'

const Category = () => {
    const { dynamicRoute } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)

    const [showProducts, setShowProducts] = useState([])

    useEffect(() => {
        setShowProducts(categoriesMap[dynamicRoute])
    }, [categoriesMap, dynamicRoute])

    return (
        <>
            <h2 className="category__title">{dynamicRoute}</h2>
            <div className="category__container">
                {showProducts && showProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}

export default Category