import { createContext } from "react";
import type { Product } from "../types/product.types";

type CartContextType = {
    cart: Product[]
    addProductCart: ( product: Product )=> void;
    removeProductCart : ( product: Product )=> void;
}

const CartContext = createContext<CartContextType | null>( null );

export default CartContext;