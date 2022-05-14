import { takeLatest, all, call, put } from 'redux-saga/effects'
import { USER_ACTIONS_TYPES } from '../../actions/user/userActionsTypes'
import {
    signInSuccess,
    signInFailed,
    signUpSuccess,
    signUpFailed,
    signOutSuccess,
    signOutFailed
} from '../../actions/user/userActionCreator'
import {
    getCurrentUser,
    createUserDocumentFromAuth,
    createAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
    signOutAuthUser
} from '../../../database/firebase.config'


export function* getUserSnapshot(userAuth, additionalInformation) {
    try {
        const userSnapshot = yield call(
            createUserDocumentFromAuth,
            userAuth,
            additionalInformation
        );

        yield put(signInSuccess({ id: userSnapshot?.id, ...userSnapshot.data()}));

         console.log('userSnapshot1>>>>>>>>>', userSnapshot)
        console.log('userSnapshot2>>>>>>>>>', userSnapshot.data())
    } catch (error) {
        yield put(signInFailed(error.message))

    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield call(signInWithGooglePopup)
        yield call(getUserSnapshot, user)
    } catch (error) {
        yield put(signInFailed(error))

    }
}


export function* signInWIthEmail({ payload: { email, password } }) {
    try {
        const { user } = yield call(signInAuthUserWithEmailAndPassword, email, password)
        yield call(getUserSnapshot, user)
    } catch (error) {
        yield put(signInFailed(error.message))
    }
}

export function* isUserAuth() {
    try {
        const userAuth = yield call(getCurrentUser)
        if (!userAuth) return;
        yield call(getUserSnapshot, userAuth)
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* signUpWIthEmail({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield call(createAuthUserWithEmailAndPassword, email, password)
        yield put(signUpSuccess(user, { displayName }))
    } catch (error) {
        yield put(signUpFailed(error))

    }
}

export function* signOut() {
    try {
        yield call(signOutAuthUser)
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailed(error))
    }
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
    yield call(getUserSnapshot, user, additionalDetails)
}

export function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}


export function* onCheckUserSession() {
    yield takeLatest(USER_ACTIONS_TYPES.CHECK_USER_SESSION, isUserAuth)

}

export function* onEmailSignInStart() {
    yield takeLatest(USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START, signInWIthEmail)
}

export function* onSignUpStart() {
    yield takeLatest(USER_ACTIONS_TYPES.SIGN_UP_START, signUpWIthEmail)
}

export function* onSignUpSuccess() {
    yield takeLatest(USER_ACTIONS_TYPES.SIGN_IN_SUCCESS, signInAfterSignUp)
}

export function* onSignOutStart() {
    yield takeLatest(USER_ACTIONS_TYPES.SIGN_OUT_START, signOut)
}

export function* userSagas() {
    yield all([
        call(onCheckUserSession),
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onSignOutStart),
        call(onSignUpSuccess)

    ])
}