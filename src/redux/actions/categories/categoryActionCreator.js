import { createActions } from '../actionCreatorTemplate/actionCreatorTemplate'
import { CATEGORIES_ACTION_TYPE } from './categoryActionType'

export const setCategories = (categoriesArray) => createActions(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray)