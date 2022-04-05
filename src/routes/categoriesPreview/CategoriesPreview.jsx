import { useContext } from "react"

import CategoriesContext from '../../contexts/CategoriesContext.jsx'

import CategoryPreview from "../../components/categoryPreview/CategoryPreview.jsx"


const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext)


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