import { all, call } from 'typed-redux-saga/macro';
import { categoriesSaga } from '../categoriesSaga/categoriesSaga'
import { userSagas } from '../userSaga/userSaga'

export function* rootSaga() {
    yield* all([call(categoriesSaga), call(userSagas)])
}