import {FC} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItemsState } from '../../redux/selectors/cartSelector'
import { clearItemFromCart, removeItemFromCart, addItemToTheCart } from '../../redux/actions/cart/cartActionCreator'
import {CartItem } from '../../redux/actions/cart/cartActionType'

import {
    CheckoutItemContainer,
    ImageContainer,
    BaseSpan,
    Arrow,
    Value,
    Quantity,
    RemoveButton
} from './checkoutItem.styles.js'

type CheckoutItemProps = {
    cartItem: CartItem
};

const CheckoutItem:FC<CheckoutItemProps> = ({ cartItem }):JSX.Element => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItemsState)


    const addItemHandler = () => dispatch(addItemToTheCart(cartItems, cartItem))
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem))
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem))


    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={cartItem.imageUrl} alt={`${cartItem.name}`} />
            </ImageContainer>
            <BaseSpan>{cartItem.name}</BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{cartItem.quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <BaseSpan>{cartItem.price}</BaseSpan>
            <RemoveButton
                onClick={clearItemHandler}
                className="remove-button"
            >
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>)
}




export default CheckoutItem