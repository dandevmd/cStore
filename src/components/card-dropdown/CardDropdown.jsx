import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import DropdownContext from '../../contexts/DropdownContext'

import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
import './cardDropdown.styles.scss'

const CardDropdown = () => {
  const { cartItems } = useContext(DropdownContext)
  const navigate = useNavigate()

  const handleCheckout = () => {
    navigate('/checkout')
  }

  return (
    <div className='cart-dropdown-container' >
      <div className='cart-items' >
        {cartItems.map(item => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={handleCheckout}>CHECKOUT</Button>
    </div>
  )
}

export default CardDropdown