import React, { createContext, useEffect, useState } from 'react'
import {auth} from "../../firebase"
export const AuthContext=createContext()

export function AuthProvider({children}) {
    const [currentUser,setCurrentUser]=useState()

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
           userCredential.user.sendEmailVerification();
           auth.signOut();
       })
      }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }
    function logout() {
        return auth.signOut()
    }
    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged(user=>{
            setCurrentUser(user)
        })
        return unsubscribe
    },[])

    const value={currentUser,signup,login,logout,resetPassword}
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

