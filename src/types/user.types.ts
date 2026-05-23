export interface User  {
    name: string;
    lastName: string;
    email: string; 
    password: string;
}

export interface RegisterFormData extends User {
    confirmPassword: string
}