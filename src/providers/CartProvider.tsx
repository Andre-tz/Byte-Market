import { useEffect, useState } from "react"
import type { CartByUser, CartItem, Product } from "../types/product.types"
import CartContext from "../context/CartContext"
import getStoredData from "../utils/getStoredData"
//import useAuth from "../hooks/useAuth"
type Props = {
    children: React.ReactNode
}

const CartProvider = ( { children } : Props ) =>{

    const CART_STORAGE_KEY = "currentCart";
    const USER_CARTS_STORAGE_KEY = "cartsByUser";
    //const { id } = useAuth();

    const [ currentCart, setCurrentCart ] = useState<CartItem[]>( getStoredData( CART_STORAGE_KEY, [] ) )

    const[ cartByUser, setCartByUser ] = useState<CartByUser>( getStoredData( USER_CARTS_STORAGE_KEY, { } ) )

    //functions
    const addProductCart =( product : Product)=>{
       const newProduct = { ...product, quantity : 1 }
        setCurrentCart( prevCart=>  [ ...prevCart, newProduct] )
    }

    const removeProductCart = ( id: number ) =>{
        setCurrentCart( prevCart =>( prevCart.filter( idProd => idProd.id !== id ) ) )
    }

    const increaseQuantity= ( id: number ) =>{
        setCurrentCart( prevCart => prevCart.map( item =>{
            const { stock , quantity } = item
            if( item.id === id && stock > quantity ){
                return { ...item, quantity: quantity+ 1}
            }
            return item
        }))
    }   

    const decreaseQuantity = ( id: number ) =>{
        setCurrentCart( prevCart => prevCart.map( item =>{
            const { quantity } = item
            if( item.id === id && quantity>1 ){
                return { ...item, quantity: quantity- 1}
            }
            return item
        }))
    }

    const getCartSubTotal = ()=>{
        return currentCart.reduce( ( total, product ) =>{
            total = total + product.price * product.quantity
            return total
        }, 0)
    }

    const getDiscount = ()=>{
        const subTotal = getCartSubTotal();
        if( subTotal > 1000){
            return subTotal * ( 10 / 100 )
        }
        return 0
    }

    const getShippingCost = () =>{
        const subTotal = getCartSubTotal();
        if( subTotal>= 2000 ) return 0
        return 50
    }

    const getCartTotal= ()=>{
        const subTotal = getCartSubTotal();
        const discount = getDiscount();
        const shipping = getShippingCost()
        return ( subTotal - discount ) + shipping
    }

    const updateCartsByUser = ( cart : CartItem[], userId: string ) =>{
        setCartByUser( prev => (
            {
                ...prev,
                [ userId ] : cart
            }
        ))
    }
    //this useEffect update itself when cart changed
    useEffect( ()=>{
        localStorage.setItem( CART_STORAGE_KEY, JSON.stringify( currentCart ) )

    }, [ currentCart ] )

    useEffect( ()=>{
        localStorage.setItem( USER_CARTS_STORAGE_KEY, JSON.stringify( cartByUser ) )
    }, [ cartByUser ] )
    return(
        <CartContext.Provider value={{ currentCart, cartByUser, updateCartsByUser, addProductCart, removeProductCart, increaseQuantity, decreaseQuantity, getCartSubTotal, getDiscount, getShippingCost, getCartTotal } }>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider;