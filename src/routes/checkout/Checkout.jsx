import { useContext } from 'react'

import DropdownContext from '../../contexts/DropdownContext'

import CheckoutItem from '../../components/checkoutItem/CheckoutItem'
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles.jsx'

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(DropdownContext)


  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          Price
        </HeaderBlock>
        <HeaderBlock>Remove</HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      })}
      <Total as='span'>TOTAL: $ {cartTotal}</Total>
    </CheckoutContainer >
  )
}

export default Checkout