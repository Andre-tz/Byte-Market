export interface User  {
    id: string;
    name: string;
    lastName: string;
    email: string; 
    password: string;
}

export interface RegisterFormData extends User {
    confirmPassword: string
}

export type LoginFormData = Pick<User, "email" | "password" >