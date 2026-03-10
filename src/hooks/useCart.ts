//this hook prevents using context outside the provider

import { useContext } from "react"
import CartContext from "../context/CartContext"

const useCart = ()=>{

    const context = useContext( CartContext );

    if( !context ){
        throw new Error ( "useCart must be used within a CartProvider" )
    }

    return context;
}

export default useCart;