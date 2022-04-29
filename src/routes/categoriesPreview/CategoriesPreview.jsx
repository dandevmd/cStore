import {Fragment} from 'react';
import { useSelector } from 'react-redux'
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../redux/selectors/categorySelector'

import Spinner from '../../components/spinner/Spinner'
import CategoryPreview from "../../components/categoryPreview/CategoryPreview.jsx"


const CategoriesPreview = () => {
    const  categoriesMap  = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)

    console.log(categoriesMap)
    return (
        isLoading ? <Spinner /> : (
            <>
                {
                    Object.keys(categoriesMap).map((title) => {
                        const products = categoriesMap[title];
                        return <CategoryPreview key={title} title={title} products={products} />

                    })
                }
            </>
        )
    )
}
export default CategoriesPreview