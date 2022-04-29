import { CATEGORIES_ACTION_TYPE } from './categoryActionType'
import { createActions } from '../actionCreatorTemplate/actionCreatorTemplate'

import { getCollectionWithDocuments } from '../../../database/firebase.config'

const {
    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILED
} = CATEGORIES_ACTION_TYPE

export const fetchCategoriesStart = () => {
    createActions(FETCH_CATEGORIES_START)
}
export const fetchCategoriesSuccess = (categoriesArray) => {
    createActions(FETCH_CATEGORIES_SUCCESS, categoriesArray)
}
export const fetchCategoriesFailed = (error) => {
    createActions(FETCH_CATEGORIES_FAILED, error)
}

export const fetchCategoriesAsync = () => async(dispatch) => {
    dispatch(fetchCategoriesStart())

    try {
        const categoriesArray = await getCollectionWithDocuments('categories');
        dispatch(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
        dispatch(fetchCategoriesFailed(error))
    }

}