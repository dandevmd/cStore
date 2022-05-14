import { useEffect,} from 'react'
import {Routes, Route} from 'react-router-dom'
import { useDispatch } from 'react-redux';


import { fetchCategoriesStart } from  '../../redux/actions/categories/categoryActionCreator'

import CategoriesPreview from '../categoriesPreview/CategoriesPreview'
import Category from '../category/Category'


const Shop = () => {
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart())

  },[])
  

  return (
    <Routes>
        <Route index element={<CategoriesPreview/>}/>
        <Route path=':dynamicRoute' element={<Category/>}/>
    </Routes>
  )
}

export default Shop