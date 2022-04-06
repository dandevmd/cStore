import { useContext } from 'react'

import DropdownContext from '../../contexts/DropdownContext'

import Button, { BUTTON_TYPE_CLASSES } from '../button/Button.jsx'
import { ProductCardContainer, Name, Footer, Price } from './productCard.styles'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl, quantity } = product
  const { addItemToCart } = useContext(DropdownContext)

  const addItem = () => addItemToCart(product)

  return (
    <ProductCardContainer >
      <img src={imageUrl} alt={`${name}`} />
      <Footer className="footer">
        <Name className="name">{name}</Name>
        <Price className="price">{quantity} </Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addItem}>BUY</Button>
    </ProductCardContainer>
  )
}

export default ProductCard