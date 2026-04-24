// SearchPage reads the search query from the URL (q parameter),
import { useSearchParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import ProductGrid from "../components/product/ProductGrid";
import CardProductSkeleton from "../components/ui/CardProductSkeleton";

const SearchPage = ()=>{
    const { products, loading } = useProducts();
    const [ searchParams ] = useSearchParams();
    const query = searchParams.get( "q" ) || ""
    const normalizedQuery = query? query.toLowerCase() : query 
    const filteredProducts = normalizedQuery? 
        products.filter( product => product.name.toLowerCase().includes( normalizedQuery ) )
        : []

    return(
        <main className="mx-auto w-[min(1200px,94%)] space-y-6 py-8">
            {
               loading?
               (
                <CardProductSkeleton />
               )
               : 
               filteredProducts.length> 0 && normalizedQuery?
                    (
                        <>
                            <section className="rounded-2xl border border-cyan-400/20 bg-linear-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)] sm:p-8">
                                <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Byte Market</span>
                                <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-100 sm:text-4xl">Resultados para <span className="text-cyan-300">{ normalizedQuery.charAt(0).toUpperCase() + normalizedQuery.slice(1) }</span></h1>
                                <p className="mt-3 text-sm text-slate-300 sm:text-base">Encontramos <span className="font-semibold text-cyan-300">{ filteredProducts.length }</span> producto{filteredProducts.length === 1? "" : "s" } relacionados con tu busqueda.</p>
                            </section>

                            <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 shadow-[0_0_30px_rgba(15,23,42,0.22)] sm:p-6">
                                <p className="max-w-3xl text-sm leading-6 text-slate-400 sm:text-base">Compara precios, categorias y elige la mejor opcion para tu setup. Estos son los productos que coinciden con lo que estas buscando.</p>

                                <div className="mt-6">
                                    <ProductGrid 
                                        arrayProduct={ filteredProducts }
                                        loading= { loading }
                                        />
                                </div>
                            </section>
                        </>
                    )
                    :
                    (
                        <>
                            <section className="rounded-2xl border border-slate-800 bg-linear-to-br from-slate-900 via-slate-900 to-slate-950 p-6 text-center shadow-[0_0_30px_rgba(15,23,42,0.22)] sm:p-8">
                                <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Resultado de busqueda</span>
                                <h1 className="mt-4 text-3xl font-bold text-slate-100 sm:text-4xl">{ normalizedQuery? "No encontramos coincidencias" : "Escribe algo para buscar" }</h1>
                                <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">Prueba con un termino mas general o explora otras categorias disponibles.</p>
                            </section>

                            <section className="grid gap-4 md:grid-cols-2">
                                <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">Sugerencia</p>
                                    <p className="mt-3 text-sm leading-6 text-slate-400">Los resultados se muestran segun coincidencia con el nombre del producto.</p>
                                </article>

                                <article className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
                                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">Explora mas</p>
                                    <p className="mt-3 text-sm leading-6 text-slate-400">Revisa laptops, componentes y perifericos destacados para seguir descubriendo productos para tu setup.</p>
                                </article>

                            </section>
                        </>
                    )
            }
        </main>
    )
}
export default SearchPage;
