import {FC} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { selectCartItemsState } from '../../redux/selectors/cartSelector'
import { addItemToTheCart } from '../../redux/actions/cart/cartActionCreator'
import {CartItem} from '../../redux/actions/cart/cartActionType'

import Button, { BUTTON_TYPE_CLASSES } from '../button/Button'
import { ProductCardContainer, Name, Footer, Price } from './productCard.styles'

type ProductCardProps = {
  product:CartItem
}

const ProductCard: FC<ProductCardProps> = ({ product }):JSX.Element => {
  const { name, price, imageUrl } = product
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItemsState)



  const addItem = () => dispatch(addItemToTheCart(cartItems, product))

  return (
    <ProductCardContainer >
      <img src={imageUrl} alt={`${name}`} />
      <Footer className="footer">
        <Name className="name">{name}</Name>
        <Price className="price">{price} </Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addItem}>BUY</Button>
    </ProductCardContainer>
  )
}

export default ProductCard