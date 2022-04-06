import React, { useContext } from 'react'

import DropdownContext from '../../contexts/DropdownContext'

import {
    CheckoutItemContainer,
    ImageContainer,
    BaseSpan,
    Arrow,
    Value,
    Quantity,
    RemoveButton
} from './checkoutItem.styles.jsx'

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, quantity, price } = cartItem
    const { clearItemFromCart, removeItemFromCart, addItemToCart } = useContext(DropdownContext)

    const clearItemHandler = () => clearItemFromCart(cartItem)
    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemFromCart(cartItem)


    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton
                onClick={clearItemHandler}
                className="remove-button"
            >
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>)
}




export default CheckoutItem