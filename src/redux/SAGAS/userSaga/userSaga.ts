import { takeLatest, all, call, put } from 'typed-redux-saga/macro'
import { User } from 'firebase/auth'
import {
    getCurrentUser,
    createUserDocumentFromAuth,
    createAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
    signOutAuthUser,
    AdditionalInformation
} from '../../../database/firebase.config'
import { USER_ACTIONS_TYPES } from '../../actions/user/userActionsTypes'
import {
    signInSuccess,
    signInFailed,
    signUpSuccess,
    signUpFailed,
    signOutSuccess,
    signOutFailed,
    EmailSignInStart,
    SignUpStart,
    SignUpSuccess,
} from '../../actions/user/userActionCreator'




export function* getUserSnapshot(
    userAuth: User,
    additionalInformation?: AdditionalInformation
) {
    try {
        const userSnapshot = yield* call(
            createUserDocumentFromAuth,
            userAuth,
            additionalInformation
        );

        if (userSnapshot) {
            yield* put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
        }
    } catch (error) {
        yield* put(signInFailed(error as Error));

    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield* call(signInWithGooglePopup)
        yield* call(getUserSnapshot, user)
    } catch (error) {
        yield* put(signInFailed(error as Error))

    }
}


export function* signInWIthEmail({ payload: { email, password } }: EmailSignInStart) {
    try {
        const userCredential = yield* call(signInAuthUserWithEmailAndPassword, email, password)
        if (userCredential) {
            const { user } = userCredential
            yield* call(getUserSnapshot, user)
        }
    } catch (error) {
        yield* put(signInFailed(error as Error))
    }
}

export function* isUserAuth() {
    try {
        const userAuth = yield* call(getCurrentUser)
        if (!userAuth) return;
        yield* call(getUserSnapshot, userAuth)
    } catch (error) {
        yield* put(signInFailed(error as Error))
    }
}

export function* signUpWIthEmail({ payload: { email, password, displayName } }: SignUpStart) {
    try {
        const userCredential = yield* call(createAuthUserWithEmailAndPassword, email, password)

        if (userCredential) {
            const { user } = userCredential;
            yield* put(signUpSuccess(user, { displayName }))
        }
    } catch (error) {
        yield* put(signUpFailed(error as Error))

    }
}

export function* signOut() {
    try {
        yield* call(signOutAuthUser)
        yield* put(signOutSuccess())
    } catch (error) {
        yield* put(signOutFailed(error as Error))
    }
}

export function* signInAfterSignUp({ payload: { user, additionalDetails}}:SignUpSuccess) {
    yield* call(getUserSnapshot, user, additionalDetails)
}

export function* onGoogleSignInStart() {
    yield* takeLatest(USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}


export function* onCheckUserSession() {
    yield* takeLatest(USER_ACTIONS_TYPES.CHECK_USER_SESSION, isUserAuth)

}

export function* onEmailSignInStart() {
    yield* takeLatest(USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START, signInWIthEmail)
}

export function* onSignUpStart() {
    yield* takeLatest(USER_ACTIONS_TYPES.SIGN_UP_START, signUpWIthEmail)
}

export function* onSignUpSuccess() {
    yield* takeLatest(USER_ACTIONS_TYPES.SIGN_IN_SUCCESS, signInAfterSignUp)
}

export function* onSignOutStart() {
    yield* takeLatest(USER_ACTIONS_TYPES.SIGN_OUT_START, signOut)
}

export function* userSagas() {
    yield* all([
        call(onCheckUserSession),
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onSignOutStart),
        call(onSignUpSuccess)

    ])
}