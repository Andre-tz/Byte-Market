import { createContext } from "react";
import type { RegisterFormData, User } from "../types/user.types";

type AuthContextType = {
    user: User
    setUser : React.Dispatch<React.SetStateAction<User>>;
    userRegister : ( data : RegisterFormData ) => void
}

const AuthContext = createContext<AuthContextType | null>( null );

export default AuthContext;