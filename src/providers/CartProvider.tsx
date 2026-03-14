import { useEffect, useState } from "react"
import type { Product } from "../types/product.types"
import CartContext from "../context/CartContext"
type Props = {
    children: React.ReactNode
}

const CartProvider = ( { children } : Props ) =>{

    const [ cart, setCart ] = useState<Product[]>( ()=>{
        const storedData = localStorage.getItem( "userCart" );
        if( !storedData ) return []
        try{
            return JSON.parse( storedData )
        }catch{
            return []
        }
    } )
    //functions
    const addProductCart =( product : Product)=>{
        setCart( prevCart=>  [ ...prevCart, product] )
    }

    const removeProductCart = ( product: Product) =>{
        setCart( prevCart =>{
            const newCart = prevCart.filter( nameProd => nameProd.name !== product.name )
            return newCart;
        } )
    }
    //this useEffect update itself when cart changed
    useEffect( ()=>{
        localStorage.setItem( "userCart", JSON.stringify( cart ))
    }, [ cart])
    return(
        <CartContext.Provider value={{ cart, addProductCart, removeProductCart}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider;