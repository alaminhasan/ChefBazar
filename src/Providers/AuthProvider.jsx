import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../Firebase/firebase.confige';

export const AuthContext = createContext()


const auth = getAuth(app)

const AuthProvider = ({children}) => {

//creating user
const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}

const login = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}
    const authInfo ={
        createUser,
        login,  
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;