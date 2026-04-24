// products selected by the user
import { FaRegTrashAlt } from "react-icons/fa";
import formatPrice from "../../utils/formatPrice";
import useCart from "../../hooks/useCart";
type Item = {
    id: number;
    image: string[];
    name: string;
    price: number;
    quantity: number;
}

const CartItem = ({ id, image, name, price, quantity }: Item) => {
        const { increaseQuantity, decreaseQuantity, removeProductCart } = useCart();
    return (
        <article className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-cyan-400/45 hover:bg-slate-900">

            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-slate-950/50 p-2">
                <img src={image[0]} alt={`Imagen de ${name}`} className="h-full w-full object-cover object-center"/>
            </div>

            <div className="flex min-w-0 flex-1 items-center justify-between gap-4">
                <div className="space-y-2">
                    <p className="line-clamp-2 text-sm font-semibold leading-6 text-slate-100">{name}</p>
                    <div>
                        <p className="text-lg font-bold text-cyan-300">{ formatPrice( price ) }</p>
                        <div className="mt-3 flex items-center gap-3">
                            <p className="text-sm font-medium text-slate-400">Cantidad:</p>
                            <div className="flex items-center overflow-hidden rounded-lg border border-slate-700 bg-slate-950/70">
                                <button type="button" onClick={ ()=>{ increaseQuantity( id ) } } className="cursor-pointer px-3 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-slate-800 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70">+</button>
                                <input type="text" name="quantity" value={ quantity } readOnly className="w-12 border-x border-slate-700 bg-transparent text-center text-sm font-semibold text-slate-100 outline-none" />
                                <button type="button" onClick={ ()=>{ decreaseQuantity( id ) }} className="cursor-pointer px-3 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-slate-800 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70">-</button>
                            </div>
                        </div>
                    </div>
                </div>

                <button type="button" onClick={ ()=>{ removeProductCart( id ) } } aria-label={`Eliminar ${name} del carrito`} className="cursor-pointer rounded-md bg-rose-400 px-3 py-2 text-slate-950 ring-1 ring-rose-300/70 transition hover:bg-rose-300 hover:ring-rose-200/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-200">
                    <FaRegTrashAlt />
                </button>
            </div>

        </article>
    );
}

export default CartItem;
