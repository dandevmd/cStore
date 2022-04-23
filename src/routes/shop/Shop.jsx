import { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { getCollectionWithDocuments } from "../../database/firebase.config";
import {setCategories} from '../../redux/actions/categories/categoryActionCreator'

import CategoriesPreview from '../categoriesPreview/CategoriesPreview'
import Category from '../category/Category'


const Shop = () => {
const dispatch = useDispatch();

  useEffect(() => {
    const asyncWrapper = async () => {
      const categoriesArray = await getCollectionWithDocuments('categories')
      dispatch(setCategories(categoriesArray))
    }
    asyncWrapper()
  }, [])

  return (
    <Routes>
        <Route index element={<CategoriesPreview/>}/>
        <Route path=':dynamicRoute' element={<Category/>}/>
    </Routes>
  )
}

export default Shop