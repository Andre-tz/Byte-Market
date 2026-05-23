import { useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import type { RegisterFormData, User } from "../types/user.types";

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

    const userRegister = ( userData : RegisterFormData )=>{
        setUser( 
            { 
                name: userData.name,
                lastName: userData.lastName, 
                email: userData.email, 
                password: userData.password 
            } )
    }

    useEffect( ()=>{
        localStorage.setItem( "userAuth", JSON.stringify( user))
    }, [ user ])
    
    return (
        <AuthContext.Provider value={ { user, setUser, userRegister } }>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;