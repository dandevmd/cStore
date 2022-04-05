import React from 'react'
import { categories } from '../../constants/categories';
import Directory from '../../components/directory/Directory';


const Home = () => {
  return (
      <Directory categories={categories} />
  )
}

export default Home