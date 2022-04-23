import {Fragment} from 'react';
import { useSelector } from 'react-redux'
import { selectCategoriesMap } from '../../redux/selectors/categorySelector'
import CategoryPreview from "../../components/categoryPreview/CategoryPreview.jsx"


const CategoriesPreview = () => {
    const  categoriesMap  = useSelector(selectCategoriesMap)

    console.log(categoriesMap)
    return (
        <>
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return <CategoryPreview key={title} title={title} products={products} />

                })
            }
        </>



    )
}
export default CategoriesPreview