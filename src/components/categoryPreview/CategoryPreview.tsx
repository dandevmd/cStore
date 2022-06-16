import {FC} from 'react'
import {CartItem} from '../../redux/actions/cart/cartActionType'
import ProductCard from '../product-card/ProductCard'
import { CategoryPreviewContainer, Title, Preview } from './categoryPreview.styles.js'


type CategoryPreviewProps = {
  title: string,
  products: CartItem[],
}

const CategoryPreview:FC<CategoryPreviewProps> = ({ title, products }):JSX.Element => {

  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {
          products
            .filter((_, idx) => idx < 4)
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))
        }
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview