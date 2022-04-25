import { CART_ACTIONS_TYPES } from "../../actions/cart/cartActionType";
import { createActions } from "../actionCreatorTemplate/actionCreatorTemplate";

import {
    addCartItem,
    removeCartItem,
    clearCartItem,
    totalQuantity
} from '../../../helpers/cartHelpers/cartHelpers';


export const setIsCartOpen = (boolean) => {
    return createActions(CART_ACTIONS_TYPES.SET_IS_OPEN, boolean);
}

export const addItemToTheCart = (cartItems, cartItemToAdd) => {
    const newCartItem = addCartItem(cartItems, cartItemToAdd);
    return createActions(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItem);
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItem = removeCartItem(cartItems, cartItemToRemove);
    return createActions(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItem);
}

export const clearItemFromCart = (cartItems, itemToClear) => {
    const newCartItem = clearCartItem(cartItems, itemToClear);
    return createActions(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItem);
}