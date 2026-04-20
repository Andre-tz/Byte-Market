//tipo que tendra los productos de mi ecommerce y los que recibiré de la API
export interface Product {
    id: number;
    name: string;
    price: number;
    source: string;
    category: string;
    images: string[];
    stock: number;
}

export interface ApiProduct {
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    images: string[];
    stock: number;
}

export interface CartItem extends Product{
    quantity: number 
}