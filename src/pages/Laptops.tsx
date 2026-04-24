import useProducts from "../hooks/useProducts";
import ProductGrid from "../components/product/ProductGrid";

const Laptops = () =>{
    const { products, loading } = useProducts( "laptops")
    return (
        <main className="mx-auto w-[min(1200px,94%)] space-y-6 py-8">
            <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 shadow-[0_0_30px_rgba(15,23,42,0.22)] sm:p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Byte Market</span>
                <h2 className="mt-3 text-2xl font-bold text-slate-100 sm:text-3xl">Laptops</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                    Encuentra laptops potentes para jugar, trabajar y crear sin comprometer rendimiento.
                </p>
            </section>

            <ProductGrid
                arrayProduct={ products }
                loading= { loading } />
        </main>
    )
}
export default Laptops;
