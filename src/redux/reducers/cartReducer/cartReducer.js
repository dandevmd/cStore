import { CART_ACTIONS_TYPES } from "../../actions/cart/cartActionType";

export const CART_INITIAL_STATE = {
    isOpen: false,
    cartItems: [],

}

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTIONS_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload
            }
        case CART_ACTIONS_TYPES.SET_IS_OPEN:
            return {
                ...state,
                isOpen: payload
            }
        default:
            return state
    }
}