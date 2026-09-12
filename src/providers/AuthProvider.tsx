import { useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import type { LoginFormData, RegisterFormData, User } from "../types/user.types";
import getStoredData from "../utils/getStoredData";

type Props = {
    children: React.ReactNode;
}

const AuthProvider = ( { children } : Props )=>{

    const USER_STORAGE_KEY = "currentUser";
    const ALL_USERS_STORAGE_KEY = "allUsers";

    const [ user, setUser ] = useState<User | null >( getStoredData( USER_STORAGE_KEY, null) )

    const [ allUsers, setAllUsers ] = useState<User[]>( getStoredData( ALL_USERS_STORAGE_KEY, [] ) );

    const userRegister = ( userData : RegisterFormData )=>{
        const newUser: User = 
            { 
                id: crypto.randomUUID(),
                name: userData.name,
                lastName: userData.lastName, 
                email: userData.email, 
                password: userData.password,
                phone: "",
                shippingAddress: {
                    address: "",
                    city: "",
                    country: ""
                }
            } 
            setUser( newUser )
            setAllUsers( prev=>[ ...prev, newUser])
    }
    
    const userLogin = ( userData : LoginFormData ) =>{
        const { email, password } = userData
        const userFound = allUsers.find(user => user.email === email && password === user.password )
        if( userFound ) {
             setUser( userFound ) 
             return true
            } else {
                return false
                } 
    }
    const userLogout = ( )=>{
        setUser( null )
        localStorage.removeItem( USER_STORAGE_KEY )
    }

    useEffect( ()=>{
        if( !user ) return
        localStorage.setItem( "currentUser", JSON.stringify( user))
    }, [ user ])
    
    useEffect( ()=>{
        localStorage.setItem( "allUsers", JSON.stringify( allUsers ) )
    }, [ allUsers ])
    
    return (
        <AuthContext.Provider value={ { user, setUser, userRegister, userLogin, userLogout, allUsers, setAllUsers } }>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;