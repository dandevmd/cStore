import { createContext, useState, useEffect, useReducer } from "react";
import { createActions } from '../redux/actions/actionCreatorTemplate/actionCreatorTemplate';


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

const INITIAL_STATE = {
    isOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

const ACTIONS_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_OPEN: 'SET_IS_OPEN',
}

const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case ACTIONS_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case ACTIONS_TYPES.SET_IS_OPEN:
            return {
                ...state,
                isOpen: payload
            }
        default:
            throw new Error(`Unhandled action type: ${type}`);
    }
}

const DropdownContext = createContext(contextInitialState);

export const DropdownProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    // const [cartCount, setCartCount] = useState(0);
    // const [cartTotal, setCartTotal] = useState(0);

    // useEffect(() => {
    //     const newCartCount = cartItems.reduce(
    //         (total, cartItem) => total + cartItem.quantity,
    //         0
    //     );
    //     setCartCount(newCartCount);
    // }, [cartItems]);

    // useEffect(() => {
    //     const newCartTotal = cartItems.reduce(
    //         (totalPrice, cartItem) => totalPrice + cartItem.quantity * cartItem.price,
    //         0
    //     );
    //     setCartTotal(newCartTotal);
    // }, [cartItems]);

    const [{
        cartItems,
        cartCount,
        cartTotal
    }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItem) => {
        const newCartCount = newCartItem.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );

        const newCartTotal = newCartItem.reduce(
            (totalPrice, cartItem) => totalPrice + cartItem.quantity * cartItem.price,
            0
        );
        dispatch(createActions(ACTIONS_TYPES.SET_CART_ITEMS, {
            cartItems: newCartItem,
            cartCount: newCartCount,
            cartTotal: newCartTotal
        }))
    }

    const addItemToCart = (cartItemToAdd) => {
        const newCartItem = addCartItem(cartItems, cartItemToAdd);
        updateCartItemsReducer(newCartItem);
    }

    const removeItemFromCart = (cartItemToRemove) => {
        const newCartItem = removeCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItem);

    }

    const clearItemFromCart = (itemToClear) => {
        const newCartItem = clearCartItem(cartItems, itemToClear);
        updateCartItemsReducer(newCartItem);

    }

    // const setIsOpen = (bool) => {
    //     dispatch(createActions(ACTIONS_TYPES.SET_IS_OPEN, { bool }))
    // }

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