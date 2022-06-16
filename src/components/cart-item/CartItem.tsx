import {FC} from 'react'
import {CartItem as TcartItem} from '../../redux/actions/cart/cartActionType'

import { CartIconContainer, Name, ItemDetails } from './cartItem.styles.jsx'

type CartItemProps = {
  cartItem: TcartItem
}

const CartItem:FC<CartItemProps> = ({ cartItem }):JSX.Element => {
  const { name, imageUrl, price, quantity } = cartItem

  return (
    <CartIconContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name className='name'>{name}</Name>
        <Name className='quantity'>{quantity} x $ {price}</Name>
      </ItemDetails>
    </CartIconContainer>
  )
}

export default CartItem