import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
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
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB06IUMDjJZ7LmRTymr63mpzQYTi9PkhJc",
    authDomain: "crown-store-e74f3.firebaseapp.com",
    projectId: "crown-store-e74f3",
    storageBucket: "crown-store-e74f3.appspot.com",
    messagingSenderId: "385129875445",
    appId: "1:385129875445:web:254f04a36853e8652b82bc"
};

// Initialize Firebase and Oauth
const app = initializeApp(firebaseConfig);
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

//Create a user document 
export const createUserDocumentFromAuth = async(userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid)

    // console.log('userRef>>', userDocRef)

    const snapShot = await getDoc(userDocRef)
        // console.log('just snapshot>>>', snapShot)
        // console.log('if shot exist>>', snapShot.exists())

    if (!snapShot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation

            })
        } catch (error) {
            console.log("error creating user", error.message)
        }
    }
    return userDocRef;

}

export const createAuthUserWithEmailAndPassword = async(email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)

}


export const signInAuthUserWithEmailAndPassword = async(email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)

}

export const signOutAuthUser = async() => await signOut(auth)

export const onAuthObserver = (callback) => onAuthStateChanged(auth, callback)


//Create a collection of document in firestore (call it ones inside useeffect to avoid mutations)
export const createCollectionWithDocuments = async(collectionName, objectsToAdd) => {
    const collectionRef = collection(db, collectionName)
    const batch = writeBatch(db)

    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
    })
    await batch.commit()
    console.log('collection created')
}

// get the conllection created with all docs
export const getCollectionWithDocuments = async() => {
    const collectionRef = collection(db, 'categories')
    const q = query(collectionRef)
    const querySnapShot = await getDocs(q)

    const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
        const { title, items } = docSnapShot.data()
        acc[title.toLowerCase()] = items;
        return acc
    }, {})

    return categoryMap
}