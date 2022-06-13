import { CATEGORIES_ACTION_TYPE, Category } from './categoryActionType'
import { createActions, ActionWithPayload, ActionWithoutPayload, withMatcher } from '../actionCreatorTemplate/actionCreatorTemplate'

export type FetchCategoriesStart = ActionWithoutPayload<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START>

export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, Category[]>

export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, Error>

// export type CategoryAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFailed


export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart => createActions(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START))

export const fetchCategoriesSuccess = withMatcher((categoriesArray: Category[]): FetchCategoriesSuccess =>
    createActions(
        CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
        categoriesArray))


export const fetchCategoriesFailed = withMatcher((error: Error): FetchCategoriesFailed =>
    createActions(
        CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED,
        error
    ))