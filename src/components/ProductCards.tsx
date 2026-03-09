//este componente me mostrara las cartas de cada producto
import { BsCartPlus } from "react-icons/bs";
type Card = {
    id: number;
    name: string;
    price: number;
    category: string;
    images: string[];
};

const ProductCards = ({ name, price, category, images }: Card) => {
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
                    <button type="button" className="rounded-md bg-cyan-400 px-3 py-2 text-s font-semibold text-slate-950 transition hover:bg-cyan-300"><BsCartPlus /></button>
                </div>

            </div>
        </article>
    );
}   
export default ProductCards; 