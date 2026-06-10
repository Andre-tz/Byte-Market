import { createContext } from "react";
import type { LoginFormData, RegisterFormData, User } from "../types/user.types";

type AuthContextType = {
    user: User
    setUser : React.Dispatch<React.SetStateAction<User>>;
    allUsers: User[]
    setAllUsers: React.Dispatch<React.SetStateAction<User[]>>
    userRegister : ( data : RegisterFormData ) => void
    userLogin : ( data : LoginFormData ) => boolean
}

const AuthContext = createContext<AuthContextType | null>( null );

export default AuthContext;