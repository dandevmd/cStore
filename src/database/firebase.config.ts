import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User,
    NextOrObserver
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    getDocs,
    setDoc,
    query,
    collection,
    writeBatch,
    QueryDocumentSnapshot,
} from 'firebase/firestore';

import { Category } from "../redux/actions/categories/categoryActionType";


const firebaseConfig = {
    apiKey: "AIzaSyB06IUMDjJZ7LmRTymr63mpzQYTi9PkhJc",
    authDomain: "crown-store-e74f3.firebaseapp.com",
    projectId: "crown-store-e74f3",
    storageBucket: "crown-store-e74f3.appspot.com",
    messagingSenderId: "385129875445",
    appId: "1:385129875445:web:254f04a36853e8652b82bc"
};

// Initialize Firebase and Oauth
initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
})

//Initialize GAuth with popup signin method
export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

// Initialize Firestore
export const db = getFirestore()

// get the conllection created with all docs
export const getCollectionWithDocuments = async (): Promise<Category[]> => {
    const collectionRef = collection(db, 'categories')
    const q = query(collectionRef)
    const querySnapShot = await getDocs(q)

    return querySnapShot.docs.map(docSnapshot => docSnapshot.data() as Category)

}

export type AdditionalInformation = {
    displayName?: string,
}

export type UserData = {
    createdAt: Date,
    email: string,
    displayName: string,
}

//Create a user document 
export const createUserDocumentFromAuth = async (
    userAuth: User,
    additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation

            })
        } catch (error) {
            console.log("error creating user", error)
        }
    }
    return userSnapshot as QueryDocumentSnapshot<UserData>;

}

export const createAuthUserWithEmailAndPassword = async (
    email: string,
    password: string
) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}


export const signInAuthUserWithEmailAndPassword = async (
    email: string,
    password: string
) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}



export const signOutAuthUser = async () => await signOut(auth)

export const onAuthObserver = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback)

export type ObjectToAdd = {
    title: string
}

//Create a collection of document in firestore (call it ones inside useeffect to avoid mutations)
export const createCollectionWithDocuments = async<T extends ObjectToAdd>(
    collectionName: string,
    objectsToAdd: T[]
): Promise<void> => {
    const collectionRef = collection(db, collectionName)
    const batch = writeBatch(db)

    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
    })
    await batch.commit()
    console.log('collection created')
}



export const getCurrentUser = (): Promise<User | null> => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (userAuth) => {
                unsubscribe();
                resolve(userAuth);
                // console.log(userAuth)
            },
            reject)
    })
}