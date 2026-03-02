//tipo que tendra los productos de mi ecommerce y los que recibiré de la API
export interface Product {
    id: number;
    name: string;
    price: number;
    images: string[];
}

export interface ApiProduct {
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    images: string[];
}
