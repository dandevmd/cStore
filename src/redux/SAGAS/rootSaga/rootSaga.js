import { all, call } from 'redux-saga/effects'
import { categoriesSaga } from '../../SAGAS/categoriesSaga/categoriesSaga'
import { userSagas } from '../userSaga/userSaga'

export function* rootSaga() {
    yield all([call(categoriesSaga), call(userSagas)])
}