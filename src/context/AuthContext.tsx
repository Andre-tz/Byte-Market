import { createContext } from "react";
import type { UserType } from "../types/user.types";

type AuthContextType = {
    user: null |UserType
    setUser : React.Dispatch<React.SetStateAction<UserType>> | null;
}

const AuthContext = createContext<AuthContextType | null>( null );

export default AuthContext;