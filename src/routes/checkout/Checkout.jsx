import { useContext } from 'react'

import DropdownContext from '../../contexts/DropdownContext'

import CheckoutItem from '../../components/checkoutItem/CheckoutItem'
import './checkout.styles.scss'

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(DropdownContext)


  return (
    <div className='checkout-container'>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          Price
        </div>
        <div className="header-block">Remove</div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      })}
      <span className='total'>TOTAL: $ {cartTotal}</span>
    </div >
  )
}

export default Checkout