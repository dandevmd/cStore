import { AnyAction } from "redux";
import { USER_ACTIONS_TYPES } from "../../actions/user/userActionsTypes";
import { UserData } from "../../../database/firebase.config";

import {
    signInFailed,
    signUpFailed,
    signOutFailed,
    signOutSuccess,
    signInSuccess,
} from '../../actions/user/userActionCreator'


export type UserState = {
    readonly currentUser: UserData | null,
    readonly isLoading: boolean,
    readonly error: Error | null
}

export const INITIAL_STATE: UserState = {
    currentUser: null,
    isLoading: false,
    error: null
}

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {

    if (signInSuccess.match(action)) {
        return {
            ...state,
            currentUser: action.payload,
            isLoading: false,
        }
    }

    if (signOutSuccess.match(action)) {
        return {
            ...state,
            currentUser: null,
            isLoading: false,
        }
    }

    if (signInFailed.match(action) || signUpFailed.match(action) || signOutFailed.match(action)) {
        return {
            ...state,
            error: action.payload,
            isLoading: false,
        }
    }

    return state
}
