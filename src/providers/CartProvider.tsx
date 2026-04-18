import { useEffect, useState } from "react"
import type { CartItem, Product } from "../types/product.types"
import CartContext from "../context/CartContext"
type Props = {
    children: React.ReactNode
}

const CartProvider = ( { children } : Props ) =>{

    const [ cart, setCart ] = useState<CartItem[]>( ()=>{
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
       const newProduct = { ...product, quantity : 1 }
        setCart( prevCart=>  [ ...prevCart, newProduct] )
    }

    const removeProductCart = ( id: number ) =>{
        setCart( prevCart =>( prevCart.filter( idProd => idProd.id !== id ) ) )
    }

    const increaseQuantity= ( id: number ) =>{
        setCart( prevCart => prevCart.map( item =>{
            const { stock , quantity } = item
            if( item.id === id && stock > quantity ){
                return { ...item, quantity: quantity+ 1}
            }
            return item
        }))
    }   

    const decreaseQuantity = ( id: number ) =>{
        setCart( prevCart => prevCart.map( item =>{
            const { quantity } = item
            if( item.id === id && quantity>1 ){
                return { ...item, quantity: quantity- 1}
            }
            return item
        }))
    }

    //this useEffect update itself when cart changed
    useEffect( ()=>{
        localStorage.setItem( "userCart", JSON.stringify( cart ))
    }, [ cart] )
    return(
        <CartContext.Provider value={{ cart, addProductCart, removeProductCart, increaseQuantity, decreaseQuantity }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider;