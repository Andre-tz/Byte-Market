import { createContext } from "react";
import type { Product } from "../types/product.types";

type CartContextType = {
    cart: Product[]
    setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

const CartContext = createContext<CartContextType | null>( null );

export default CartContext;