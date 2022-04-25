import { useDispatch, useSelector } from 'react-redux'
import { selectCartItemsState } from '../../redux/selectors/cartSelector'
import { clearItemFromCart, removeItemFromCart, addItemToTheCart } from '../../redux/actions/cart/cartActionCreator'

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
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItemsState)


    const addItemHandler = () => dispatch(addItemToTheCart(cartItems, cartItem))
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem))
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem))


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