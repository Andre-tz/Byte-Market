//este componente me mostrara las cartas de cada producto
import { BsCartPlus } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs";
import useCart from "../../hooks/useCart"; 
import formatPrice from "../../utils/formatPrice";
import type { Product } from "../../types/product.types";
import useAuth from "../../hooks/useAuth";
import isEmptyFields from "../../utils/isEmptyFields";

type Card = Product & {
    showModal : ()=>void;
}

const ProductCards = ({ id, name, price, source, category, images, stock, showModal }: Card) => {
    const { addProductCart, cart } = useCart();
    const { user } = useAuth()
    const product = { id, name, price, source, category, images, stock }
    const isSelected = cart.some( productCard => productCard.id === product.id )

    const handleProduct = ()=>{
        if( !isSelected){ addProductCart( product )}
    }

    const handleClick = () =>{
        const noUser = isEmptyFields( user )
        if( noUser ){
            showModal()
        }else{
            handleProduct()
        }
    }
    return (
        <article className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70 transition hover:border-cyan-400/45 hover:bg-slate-900">
            <p className="border-b border-slate-800 bg-slate-950/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">{ category }</p>    
            <div className="bg-slate-950/40 p-4">
                <img src={images[0]} alt={ `imagen de ${ images}` }  className="h-40 w-full rounded-lg object-cover object-center"/>
            </div>

            <div className="space-y-3 px-4 pb-4">
                <p className="line-clamp-2 min-h-12 text-sm font-semibold leading-6 text-slate-100">{ name }</p>

                <div className="flex items-center justify-between gap-3">
                    <p className="text-lg font-bold text-cyan-300">{ formatPrice( price ) }</p>
                    <button type="button" onClick={ handleClick } disabled= { isSelected }
                        className={`cursor-pointer rounded-md px-3 py-2 text-s font-semibold transition ${
                            isSelected
                                ? "bg-emerald-400 text-slate-950 ring-1 ring-emerald-300/70 hover:bg-emerald-300 hover:ring-emerald-200/80"
                                : "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                        }`}>
                        { isSelected ? <BsCartCheckFill  /> : <BsCartPlus/> }
                    </button>  
                </div>

            </div>
        </article>
    );
}   
export default ProductCards; 
