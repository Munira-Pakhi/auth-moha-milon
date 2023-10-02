import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword (auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword (auth, email, password)
    }

    const singInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut =()=>{
        setLoading(true);
        return signOut (auth);
    }

    // observe auth state change
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,  currentUser=>{
            setUser(currentUser);
            console.log('observing current user inside useEffect of AuthProvider', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return() =>{
            unSubscribe()
        }
    },[]);

    const authInfo = { user, createUser, signInUser, logOut, loading, singInWithGoogle }
 
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes ={
    children: PropTypes.node
}

/****
 * 1. create context and export it
 * 2. set provider with value
 * 3. use the Auth Provider in the main.jsx file
 * 4. access children in the AuthProvider component as children as children and use it is the middle of the provider
 * 5. 
 * 
 * **/ 