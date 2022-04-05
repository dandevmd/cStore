import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];

}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    } else {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToRemove.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        );
    }
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}


const totalQuantity = (cartItems) => {
    return cartItems.reduce((accumulatedQuantity, cartItem) => {
        return accumulatedQuantity + cartItem.quantity;
    }, 0);
}

const contextInitialState = {
    isOpen: false,
    setIsOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    cartCount: 0,
    cartTotal: 0
}

const DropdownContext = createContext(contextInitialState);

export const DropdownProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (totalPrice, cartItem) => totalPrice + cartItem.quantity * cartItem.price,
            0
        );
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const addItemToCart = (cartItemToAdd) => {
        setCartItems(addCartItem(cartItems, cartItemToAdd));
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }

    const clearItemFromCart = (itemToClear) => {
        setCartItems(clearCartItem(cartItems, itemToClear));
    }

    const value = {
        isOpen,
        setIsOpen,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartCount,
        cartTotal
    };
    return <DropdownContext.Provider value={value} >{children}</DropdownContext.Provider>;
}
export default DropdownContext;