import { useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import DropdownContext from '../../contexts/DropdownContext'

import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
import { CartDropdownContainer, CartItemsContainer, EmptyMessage } from './cardDropdown.styles.jsx'

const CardDropdown = () => {
  const { cartItems, setIsOpen, isOpen } = useContext(DropdownContext)
  const navigate = useNavigate()
  const ref = useRef()

  const handleCheckout = () => {
    navigate('/checkout')
  }

  useEffect(() => {
    const checkIfClickedOutside = e => {

      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isOpen])

  return (
    <CartDropdownContainer ref={ref}>
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