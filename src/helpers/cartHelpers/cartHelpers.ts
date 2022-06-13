import {  CategoryItem } from '../../redux/actions/categories/categoryActionType';
import { CartItem } from '../../redux/actions/cart/cartActionType';



export const addCartItem = (cartItems:CartItem[], productToAdd:CategoryItem):CartItem[] => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1 } :
            cartItem
        );
    }

    return [...cartItems, {...productToAdd, quantity: 1 }];

}

export const removeCartItem = (cartItems:CartItem[], cartItemToRemove:CartItem):CartItem[] => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (existingCartItem && existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    } else {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1 } :
            cartItem
        );
    }
}

export const clearCartItem = (cartItems:CartItem[], cartItemToClear:CartItem):CartItem[] => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}



export const totalQuantity = (cartItems:CartItem[]) => {
    return cartItems.reduce((accumulatedQuantity, cartItem) => {
        return accumulatedQuantity + cartItem.quantity;
    }, 0);
}