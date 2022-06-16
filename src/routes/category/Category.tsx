import {  useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../redux/selectors/categorySelector'

import Spinner from '../../components/spinner/Spinner'
import ProductCard from '../../components/product-card/ProductCard'
import { CategoryTitle, CategoryCont } from './category.styles.jsx'

type CategoryRouteParams={
    category: string
}

const Category = () => {
    const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
    const  categoriesMap  = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)
    const [showProducts, setShowProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setShowProducts(categoriesMap[category])
    }, [categoriesMap, category])


    return (
        isLoading ? <Spinner /> : (
            <>
                <CategoryTitle>{category}</CategoryTitle>
                <CategoryCont>
                    {showProducts && showProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </CategoryCont>
            </>
        )
    )
}

export default Category