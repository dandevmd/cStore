import { combineReducers } from "redux";
import { userReducer } from "./userReducer/userReducer";
import { categoryReducer } from "./categoryReducer/categoryReducer";


const rootReducer = combineReducers({
    user: userReducer,
    categories: categoryReducer,
})

export default rootReducer