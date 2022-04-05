import { createContext, useState, useEffect } from "react";

import { getCollectionWithDocuments } from "../database/firebase.config.js";
// import SHOP_DATA from '../shop-data.js'


const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const asyncWrapper = async () => {
            const categoryMap = await getCollectionWithDocuments()
            // console.log(categoryMap)
            setCategoriesMap(categoryMap)
        }
        asyncWrapper()
    }, [])

    const value = { categoriesMap }
    return <CategoriesContext.Provider
        value={value}
    >{children}</CategoriesContext.Provider>
}


export default CategoriesContext;
