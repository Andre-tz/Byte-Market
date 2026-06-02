import type { LoginFormData, RegisterFormData } from "../types/user.types";

const isEmptyFields = ( obj: RegisterFormData | LoginFormData )=>{
    return Object.values( obj ).some( value => value.trim() === "")
}
export default isEmptyFields;