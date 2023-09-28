import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import app from "../firebase/firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null)
    const [loading, setLoading] = useState(true)
    
    // create a new user with firebase
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in with user
    const signIn  = (email, password) =>{
        setLoading(true)
         return signInWithEmailAndPassword(auth, email, password)
     }

    //  logOut user 
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
     }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
         
            setUser(currentUser)
            setLoading(false)
            // console.log(currentUser)
        })
        return()=>{
     return unsubscribe()
        }
    },[])
    const clientInfo = {
         user,
         loading,
         createUser,
         signIn,
         logOut

    }
    return (
    <AuthContext.Provider value={clientInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;