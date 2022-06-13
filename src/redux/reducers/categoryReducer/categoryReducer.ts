import { AnyAction } from 'redux';

import {  Category } from '../../actions/categories/categoryActionType'
import {  fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed } from '../../actions/categories/categoryActionCreator'

export type CategoriesState = {
    readonly categories: Category[];
    readonly isLoading: boolean;
    readonly error: Error | null;
}

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
    categories: [],
    isLoading: false,
    error: null
}

export const categoryReducer = (state = CATEGORIES_INITIAL_STATE, action = {} as AnyAction): CategoriesState => {
    if (fetchCategoriesStart.match(action)) {
        return { ...state, isLoading: true }
    }

    if (fetchCategoriesSuccess.match(action)) {
        return { ...state, categories: action.payload, isLoading: false }
    }

    if (fetchCategoriesFailed.match(action)){
        return {...state, error:action.payload, isLoading:false}
    }

    return state

}