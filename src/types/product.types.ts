//tipo que tendra los productos de mi ecommerce y los que recibiré de la API
export interface Product {
    id: number;
    name: string;
    price: number;
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
