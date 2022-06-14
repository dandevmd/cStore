import { takeLatest, all, call, put } from 'typed-redux-saga/macro'
import { getCollectionWithDocuments } from '../../../database/firebase.config'
import { CATEGORIES_ACTION_TYPE } from '../../actions/categories/categoryActionType'
import { fetchCategoriesSuccess, fetchCategoriesFailed } from '../../actions/categories/categoryActionCreator'




export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield* call(getCollectionWithDocuments);
        yield* put(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
        yield* put(fetchCategoriesFailed(error as Error))
    }

}

export function* onFetchCategories() {
    yield* takeLatest(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
    yield* all([call(onFetchCategories)])
}