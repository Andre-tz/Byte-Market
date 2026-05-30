import type { RegisterFormData } from "../types/user.types";

const isEmptyFields = ( obj: RegisterFormData )=>{
    return Object.values( obj ).some( value => value.trim() === "")
}
export default isEmptyFields;