import { useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import type { LoginFormData, RegisterFormData, User } from "../types/user.types";

type Props = {
    children: React.ReactNode;
}

const AuthProvider = ( { children } : Props )=>{
    const [ user, setUser ] = useState<User>( ()=>{
        const storedData = localStorage.getItem( "userAuth")
        if( !storedData ) return { name: "", lastName: "", email: "", password:"" }

        try{
            return JSON.parse( storedData )
        }catch{
            return { name: "", lastName: "", email: "", password:"" }
        }
    })

    const [ allUsers, setAllUsers ] = useState<User[]>( [] );

    const userRegister = ( userData : RegisterFormData )=>{
        const newUser: User = 
            { 
                name: userData.name,
                lastName: userData.lastName, 
                email: userData.email, 
                password: userData.password 
            } 
            setUser( newUser )
            setAllUsers( prev=>[ ...prev, newUser])
    }
    
    const userLogin = ( userData : LoginFormData ) =>{
        console.log( userData, "falta logicaaa")
        //falta logica!
    }

    useEffect( ()=>{
        localStorage.setItem( "userAuth", JSON.stringify( user))
    }, [ user, allUsers ])
    
    useEffect( ()=>{
        localStorage.setItem( "allUsers", JSON.stringify( allUsers ) )
    }, [ user, allUsers ])
    
    return (
        <AuthContext.Provider value={ { user, setUser, userRegister, userLogin, allUsers, setAllUsers } }>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;