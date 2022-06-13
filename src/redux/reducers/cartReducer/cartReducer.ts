import { AnyAction } from "redux";
import { setCartItems, setIsCartOpen } from '../../actions/cart/cartActionCreator'
import { CartItem } from "../../actions/cart/cartActionType";

export type CartState = {
    isOpen: boolean;
    cartItems: CartItem[];
}

export const CART_INITIAL_STATE:CartState = {
    isOpen: false,
    cartItems: [],

}

export const cartReducer = (state = CART_INITIAL_STATE, action:AnyAction):CartState => {
    if(setIsCartOpen.match(action)){
        return{
            ...state,
            isOpen: action.payload
        }
    }

    if(setCartItems.match(action)){
        return{
            ...state,
            cartItems: action.payload
        }
    }
    return state
}