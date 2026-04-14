import useCart from "../../hooks/useCart";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import CartItem from "../CartItem";


//displays the shopping cart content
const Cart = ()=>{
    const { cart } = useCart();
    return(
        <div>
            <h2>Tu Carrito</h2>
            { 
                cart.length=== 0?
                ( 
                    <div>
                        <div>
                            <MdOutlineRemoveShoppingCart />
                        </div>
                        <div>
                            <p>Carrito vacio</p>
                            <p>Agrega tus articulos favoritos</p>
                        </div>
                    </div>
                )
                :
                ( cart.map( (item, index  )=>(
                    <CartItem 
                        key={ index }
                        name={ item.name}
                        image={ item.images}
                        price={ item.price }
                        />
                 ) ))
            }
            
        </div>
    )
}

export default Cart;