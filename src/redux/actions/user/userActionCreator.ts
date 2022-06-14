import { USER_ACTIONS_TYPES } from "./userActionsTypes"
import { createActions, withMatcher, ActionWithPayload, ActionWithoutPayload } from '../actionCreatorTemplate/actionCreatorTemplate'
import { AdditionalInformation, UserData } from "../../../database/firebase.config"
import { User } from "firebase/auth"


export type CheckUserSession = ActionWithoutPayload<USER_ACTIONS_TYPES.CHECK_USER_SESSION>

export type SetCurrentUser = ActionWithPayload<USER_ACTIONS_TYPES.SET_CURRENT_USER, UserData>

export type GoogleSignInStart = ActionWithoutPayload<USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START>

export type EmailSignInStart = ActionWithPayload<USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START, { email: string, password: string }>

export type SignInSuccess = ActionWithPayload<USER_ACTIONS_TYPES.SIGN_IN_SUCCESS, UserData>

export type SignInFailed = ActionWithPayload<USER_ACTIONS_TYPES.SIGN_IN_FAILED, Error>

export type SignUpStart = ActionWithPayload<USER_ACTIONS_TYPES.SIGN_UP_START, { email: string, password: string, displayName: string }>

export type SignUpSuccess = ActionWithPayload<USER_ACTIONS_TYPES.SIGN_UP_SUCCESS, { user: User, additionalDetails: AdditionalInformation }>

export type SignUpFailed = ActionWithPayload<USER_ACTIONS_TYPES.SIGN_UP_FAILED, Error>

export type SignOutStart = ActionWithoutPayload<USER_ACTIONS_TYPES.SIGN_OUT_START>

export type SignOutSuccess = ActionWithoutPayload<USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS>

export type SignOutFailed = ActionWithPayload<USER_ACTIONS_TYPES.SIGN_OUT_FAILED, Error>



export const checkUserSession = withMatcher((): CheckUserSession => createActions(USER_ACTIONS_TYPES.CHECK_USER_SESSION))

export const setCurrentUser = withMatcher((user: UserData): SetCurrentUser => createActions(USER_ACTIONS_TYPES.SET_CURRENT_USER, user))

export const googleSignInStart = withMatcher((): GoogleSignInStart => createActions(USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START))

export const emailSignInStart = withMatcher((email: string, password: string): EmailSignInStart => createActions(USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START, { email, password }))

export const signInSuccess = withMatcher((user: UserData & {id: string}): SignInSuccess => createActions(USER_ACTIONS_TYPES.SIGN_IN_SUCCESS, user))

export const signInFailed = withMatcher((error: Error): SignInFailed => createActions(USER_ACTIONS_TYPES.SIGN_IN_FAILED, error))

export const signUpStart = withMatcher((email: string, password: string, displayName: string): SignUpStart => createActions(USER_ACTIONS_TYPES.SIGN_UP_START, { email, password, displayName }))

export const signUpSuccess = withMatcher((user:User, additionalDetails: AdditionalInformation): SignUpSuccess => createActions(USER_ACTIONS_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails }))

export const signUpFailed = withMatcher((error: Error): SignUpFailed => createActions(USER_ACTIONS_TYPES.SIGN_UP_FAILED, error))

export const signOutStart = withMatcher((): SignOutStart => createActions(USER_ACTIONS_TYPES.SIGN_OUT_START))


export const signOutSuccess = withMatcher((): SignOutSuccess => createActions(USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS))

export const signOutFailed = withMatcher((error: Error): SignOutFailed => createActions(USER_ACTIONS_TYPES.SIGN_OUT_FAILED, error))