import React, { createContext, useEffect, useState } from 'react'
import {auth} from "../../firebase"
export const AuthContext=createContext()

export function AuthProvider({children}) {
    const [currentUser,setCurrentUser]=useState()
    const [userData,setUserData]=useState()
    

    async function signup(email, password) {
        const userCredential=await auth.createUserWithEmailAndPassword(email, password)
        userCredential.user.sendEmailVerification();

        console.log("POST CREATE ACCOUNT")
        const response = await fetch('https://lol-app-server.vercel.app/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                uid: userCredential.user.uid,
                email: userCredential.user.email,
                factors: [] // Initialize with an empty factors array
            }),
        });

        console.log("RES SIGNUP",response.json())
        
        auth.signOut();
        return userCredential.user.uid
      }
    function login(email, password) {
        const user=auth.signInWithEmailAndPassword(email, password)
        return user
        
    }
    function logout() {
        return auth.signOut()
        
    }
    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }

    function refresh(uid){
        if(currentUser!=undefined && currentUser!=null)
            {
                console.log("USER",currentUser)
                fetch(`https://lol-app-server.vercel.app/api/user/${uid}`).then((res)=>res.json().then((res)=>{
                    console.log("REEES USER DATA",res)
                setUserData(res)
            }))
            }
       
        
        
    }
    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged(user=>{
            setCurrentUser(user)
            if(user!=null){refresh(user.uid)}
            
        })
        return unsubscribe
    },[])


    const value={currentUser,signup,login,logout,resetPassword,userData,refresh}
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

