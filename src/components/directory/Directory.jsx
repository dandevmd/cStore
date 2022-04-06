import CategoryItem from '../category-item/CategoryItem';
import {categories} from '../../constants/categories';
import './directory.styles.scss';


const Directory = () => {
  return (
      <div className='directory-container'>
          {categories.map((category) => (
              <CategoryItem key={category.id} category={category} />

          ))}
      </div >
  )
}

export default Directory