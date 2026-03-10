import { useState } from "react"
import type { Product } from "../types/product.types"
import CartContext from "../context/CartContext"
type Props = {
    children: React.ReactNode
}

const CartProvider = ( { children } : Props ) =>{

    const [ cart, setCart ] = useState<Product[]>( [] )
    //important funcionst
    const addProductCart =( product : Product)=>{
        setCart( prevCart=>  [ ...prevCart, product] )
    }

    const removeProductCart = ( product: Product) =>{
        setCart( prevCart =>{
            const newCart = prevCart.filter( nameProd => nameProd.name !== product.name )
            return newCart;
        } )
    }

    return(
        <CartContext.Provider value={{ cart, addProductCart, removeProductCart}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider;