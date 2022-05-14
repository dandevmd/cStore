import { CATEGORIES_ACTION_TYPE } from '../../actions/categories/categoryActionType'

export const CATEGORIES_INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null
}

export const categoryReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {

    switch (action.type) {
        case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START:
            return {
                ...state,
                isLoading: true,
            }
        case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categories: action.payload,
            }
        case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state
    }

}