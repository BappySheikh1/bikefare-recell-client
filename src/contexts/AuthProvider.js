import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.config';
 
export const AuthContext = createContext()
const auth =getAuth(app)
const AuthProvider = ({children}) => {
  const [user,setUser]=useState('')
  const [loading,setLoading]=useState(true)
  
  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const updateUserProfile=(name,photoURL)=>{
    return updateProfile(auth.currentUser,{
        displayName: name,
        photoURL: photoURL
    })
  }

  const googleProvider= new GoogleAuthProvider()
  const socialLoginUser=()=>{
    return signInWithPopup(auth,googleProvider)
  }  

  const LoginUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
   
  const forgetUserPassword=(email)=>{
    return sendPasswordResetEmail(auth, email)
  }

  const LogOutUser=()=>{
    return signOut(auth)
  }

  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
       setUser(currentUser)
       setLoading(false)
   })

   return ()=> unsubscribe()
  },[])
 
    const authInfo={
      user,
      createUser,
      socialLoginUser,
      LoginUser,
      LogOutUser,
      forgetUserPassword,
      updateUserProfile,
      loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;