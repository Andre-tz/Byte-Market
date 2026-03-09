import { useState } from "react"
import type { Product } from "../types/product.types"
import CartContext from "../context/CartContext"
type Props = {
    children: React.ReactNode
}

const CartProvider = ( { children } : Props ) =>{

    const [ cart, setCart ] = useState<Product[]>( [] )
    
    return(
        <CartContext.Provider value={{ cart, setCart }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider;