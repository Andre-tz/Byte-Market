export interface User  {
    id: string;
    name: string;
    lastName: string;
    email: string; 
    password: string;
    phone: string;
    shippingAddress: {
        address: string;
        city: string;
        country: string;
    }
}

export interface RegisterFormData extends User {
    confirmPassword: string
}

export type LoginFormData = Pick<User, "email" | "password" >