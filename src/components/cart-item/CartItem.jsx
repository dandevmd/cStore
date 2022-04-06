import React from 'react'
import { CartIconContainer, Name, ItemDetails } from './cartItem.styles.jsx'

const CartItem = ({ cartItem }) => {
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