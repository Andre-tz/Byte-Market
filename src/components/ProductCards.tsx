//este componente me mostrara las cartas de cada producto
import { BsCartPlus } from "react-icons/bs";
import { BsCartDash } from "react-icons/bs";
import useCart from "../hooks/useCart"; 
import { useState } from "react";
type Card = {
    id: number;
    name: string;
    price: number;
    category: string;
    images: string[];
};

const ProductCards = ({ id, name, price, category, images }: Card) => {
    const { addProductCart, removeProductCart, cart } = useCart();
    const [ isSelected, setIsSelected ] = useState<boolean>( false );

    const product = { id, name, price, category, images }

    const handleProduct = ()=>{
        const isAdded = cart. some( productCart => productCart.id === product.id)
        setIsSelected( isAdded );
        if( isSelected){ removeProductCart( product ) }else { addProductCart( product )}
    }
    return (
        <article className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70 transition hover:border-cyan-400/45 hover:bg-slate-900">
            <p className="border-b border-slate-800 bg-slate-950/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">{ category }</p>    
            <div className="bg-slate-950/40 p-4">
                <img src={images[0]} alt="" className="h-40 w-full rounded-lg object-cover object-center"/>
            </div>

            <div className="space-y-3 px-4 pb-4">
                <p className="line-clamp-2 min-h-12 text-sm font-semibold leading-6 text-slate-100">{ name }</p>

                <div className="flex items-center justify-between gap-3">
                    <p className="text-lg font-bold text-cyan-300">{price}</p>
                    <button type="button" onClick={ handleProduct }
                        className={`rounded-md px-3 py-2 text-s font-semibold transition ${
                            isSelected
                                ? "bg-rose-400 text-slate-950 ring-1 ring-rose-300/70 hover:bg-rose-300 hover:ring-rose-200/80"
                                : "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                        }`}>
                        { isSelected ? <BsCartDash /> : <BsCartPlus/> }
                    </button>  
                </div>

            </div>
        </article>
    );
}   
export default ProductCards; 
