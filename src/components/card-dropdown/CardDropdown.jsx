import { useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import DropdownContext from '../../contexts/DropdownContext'

import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
import './cardDropdown.styles.scss'

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
    <div className='cart-dropdown-container' 
    ref={ref}
      //  onMouseLeave={() => setIsOpen(false)}
    >
      <div className='cart-items' >
        {cartItems.map(item => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={handleCheckout} >CHECKOUT</Button>
    </div>
  )
}

export default CardDropdown