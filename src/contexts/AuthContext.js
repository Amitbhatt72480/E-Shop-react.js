import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged,signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const UserContext = createContext()

export const AuthContextProvider = ({children}) =>{

	const [user, setUser] = useState({})

	const createUser = (email, password) =>{
		createUserWithEmailAndPassword(auth, email, password)
		setDoc(doc(db, 'users', email),{
			wishlist : [],
			cart : []
		})
	}

	const signin = (email, password) =>{
		return signInWithEmailAndPassword(auth, email, password)
	}

	const logOut = ()=>{
		return signOut(auth)
	}

	useEffect(()=>{
		const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
			setUser(currentUser);
			console.log(currentUser);
		})
		return ()=>{unsubscribe()}
	}, [])

	return (
		<UserContext.Provider value={{createUser, signin, user, logOut}}>
			{children}
		</UserContext.Provider>
	)
}

export const UserAuth = () =>{
	return useContext(UserContext)
}