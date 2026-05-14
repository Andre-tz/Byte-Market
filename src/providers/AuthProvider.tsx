import { useState } from "react";
import AuthContext from "../context/AuthContext";
import type { UserType } from "../types/user.types";

type Props = {
    children: React.ReactNode;
}

const AuthProvider = ( { children } : Props )=>{
    const [ user, setUser ] = useState<UserType>( {
        name: "",
        lastName: "",
        email: "",
        password:""
    } )

    return (
        <AuthContext.Provider value={ { user, setUser } }>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;