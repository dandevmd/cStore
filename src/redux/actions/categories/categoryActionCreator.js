import { CATEGORIES_ACTION_TYPE } from './categoryActionType'
import { createActions } from '../actionCreatorTemplate/actionCreatorTemplate'


export const fetchCategoriesStart = () => createActions(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess = categoriesArray => createActions(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArray)

export const fetchCategoriesFailed = error => createActions(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error)