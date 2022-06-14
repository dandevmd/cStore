import { createSelector } from 'reselect';
import {CartState} from '../reducers/cartReducer/cartReducer';
import { RootState } from '../store/store';

export const extractedCartStateSlice = (state: RootState):CartState => state.cart;

export const selectIsOpenState = createSelector(
    [extractedCartStateSlice],
    (cart) => cart.isOpen
)

export const selectCartItemsState = createSelector(
    [extractedCartStateSlice],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItemsState],
    (cartItems):number => {
        return cartItems.reduce((total, cartItem) => {
            return total + cartItem.quantity
        }, 0)
    }

)
export const selectCartItemsTotal = createSelector(
    [selectCartItemsState],
    (cartItems):number => {
        return cartItems.reduce(
            (total, cartItem) => {
                return total + cartItem.quantity * cartItem.price
            }, 0)
    }
)