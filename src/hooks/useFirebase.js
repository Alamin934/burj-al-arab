import initializeAuthentication from "../FireBase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({});
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const logOUt = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [])


    return {
        user,
        signInUsingGoogle,
        logOUt
    }

};

export default useFirebase;