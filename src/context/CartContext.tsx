import { createContext } from "react";
import type { CartItem, Product } from "../types/product.types";

type CartContextType = {
    cart: CartItem[];
    addProductCart: ( product: Product )=> void;
    removeProductCart : ( id: number )=> void;
    increaseQuantity: ( id: number ) => void;
    decreaseQuantity: ( id: number ) => void;
    getCartSubTotal : ( ) => number;
    getDiscount: ( ) => number;
    getShippingCost: ()=> number;
    getCartTotal: ()=> number
}

const CartContext = createContext<CartContextType | null>( null );

export default CartContext;