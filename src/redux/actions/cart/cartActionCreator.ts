import { CART_ACTIONS_TYPES, CartItem } from "./cartActionType";
import { createActions, withMatcher, ActionWithPayload } from "../actionCreatorTemplate/actionCreatorTemplate";
import {
    addCartItem,
    removeCartItem,
    clearCartItem,    
} from '../../../helpers/cartHelpers/cartHelpers';
import { CategoryItem } from "../../../redux/actions/categories/categoryActionType";

export type SetCartIsOpen = ActionWithPayload<CART_ACTIONS_TYPES.SET_IS_OPEN, boolean>;

export type SetCartItems = ActionWithPayload<CART_ACTIONS_TYPES.SET_CART_ITEMS, CartItem[]>


export const setIsCartOpen = withMatcher((boolean: boolean): SetCartIsOpen  => 
 createActions(CART_ACTIONS_TYPES.SET_IS_OPEN, boolean));

export const setCartItems = withMatcher((cartItems:CartItem[]):SetCartItems => createActions(CART_ACTIONS_TYPES.SET_CART_ITEMS, cartItems));

export const addItemToTheCart = (cartItems:CartItem[], cartItemToAdd:CategoryItem) => {
    const newCartItem = addCartItem(cartItems, cartItemToAdd);
    return setCartItems(newCartItem)
}

export const removeItemFromCart = (cartItems:CartItem[], cartItemToRemove:CartItem) => {
    const newCartItem = removeCartItem(cartItems, cartItemToRemove);
    return setCartItems(newCartItem)
}

export const clearItemFromCart = (cartItems:CartItem[], itemToClear:CartItem) => {
    const newCartItem = clearCartItem(cartItems, itemToClear);
    return setCartItems(newCartItem)
}