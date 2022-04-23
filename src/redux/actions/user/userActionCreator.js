import { USER_ACTIONS_TYPES } from "./userActionsTypes"
import { createActions } from '../actionCreatorTemplate/actionCreatorTemplate'

export const setCurrentUser = (user) => createActions(USER_ACTIONS_TYPES.SET_CURRENT_USER, user)