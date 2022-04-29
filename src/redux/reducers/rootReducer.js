import { combineReducers } from "redux";
import { userReducer } from "./userReducer/userReducer";
import { categoryReducer } from "./categoryReducer/categoryReducer";
import { cartReducer } from "./cartReducer/cartReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoryReducer,
    cart: cartReducer
})