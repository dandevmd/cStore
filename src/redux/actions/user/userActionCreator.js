import { USER_ACTIONS_TYPES } from "./userActionsTypes"
import { createActions } from '../actionCreatorTemplate/actionCreatorTemplate'

export const setCurrentUser = user => createActions(USER_ACTIONS_TYPES.SET_CURRENT_USER, user)

export const checkUserSession = () => createActions(USER_ACTIONS_TYPES.CHECK_USER_SESSION)

export const googleSignInStart = () => createActions(USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START)

export const emailSignInStart = (email, password) => createActions(USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START, { email, password })

export const signInSuccess = user => createActions(USER_ACTIONS_TYPES.SIGN_IN_SUCCESS, user)

export const signInFailed = error => createActions(USER_ACTIONS_TYPES.SIGN_IN_FAILED, error)

export const signUpStart = (email, password, displayName) => createActions(USER_ACTIONS_TYPES.SIGN_UP_START, { email, password, displayName })

export const signUpSuccess = (user, additionalDetails) => createActions(USER_ACTIONS_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails })

export const signUpFailed = error => createActions(USER_ACTIONS_TYPES.SIGN_UP_FAILED, error)

export const signOutStart = () => createActions(USER_ACTIONS_TYPES.SIGN_OUT_START)

export const signOutSuccess = () => createActions(USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS)

export const signOutFailed = error => createActions(USER_ACTIONS_TYPES.SIGN_OUT_FAILED, error)