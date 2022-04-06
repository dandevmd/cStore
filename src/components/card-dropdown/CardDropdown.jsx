import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import DropdownContext from '../../contexts/DropdownContext'

import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
import { CartDropdownContainer, CartItemsContainer, EmptyMessage } from './cardDropdown.styles.jsx'

const CardDropdown = () => {
  const { cartItems } = useContext(DropdownContext)
  const navigate = useNavigate()

  const handleCheckout = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer >
      <CartItemsContainer>
        {cartItems.length 
        ?(cartItems.map(item => (
          <CartItem key={item.id} cartItem={item} />
        ))) 
        : (<EmptyMessage></EmptyMessage>)}
      </CartItemsContainer>
      <Button onClick={handleCheckout}>CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CardDropdown