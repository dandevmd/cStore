export const addCartItem = (cartItems, productToAdd) => {
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

export const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    } else {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1 } :
            cartItem
        );
    }
}

export const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}

export const totalQuantity = (cartItems) => {
    return cartItems.reduce((accumulatedQuantity, cartItem) => {
        return accumulatedQuantity + cartItem.quantity;
    }, 0);
}