import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from "axios";


export const AuthContext = createContext(null)
const AuthProviter = (props = {}) => {
    const { children } = props || {}
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser?.email) {
                const user = { email: currentUser.email }

                axios.post(`https://hotel-booking-server-sable.vercel.app/jwt`, user, {
                    withCredentials: true,
                })
                    .then(res => {
                        setLoading(false)
                    })

            } else {
                axios.post(`https://hotel-booking-server-sable.vercel.app/logout`, {}, {
                    withCredentials: true
                })
                    .then(res => {
                        setLoading(false)
                    })
            }
        })
        return () => {
            return unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        googleLogin,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviter;