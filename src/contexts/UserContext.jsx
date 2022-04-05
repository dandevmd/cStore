import { createContext, useState, useEffect } from 'react';
import { onAuthObserver } from '../database/firebase.config';
import { createUserDocumentFromAuth } from '../database/firebase.config';


const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = {
        currentUser,
        setCurrentUser
    }

    useEffect(() => {
        const unsubscribe = onAuthObserver(user => {
            if(user){
                 createUserDocumentFromAuth(user)

            }

            setCurrentUser(user)
            console.log(user)
        })
        return unsubscribe
    }, [])

    return <UserContext.Provider value={value}
    >
        {children}
    </UserContext.Provider>
}


export default UserContext;