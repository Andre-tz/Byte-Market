import type { Product } from "../types/product.types"
import CardProductSkeleton from "./CardProductSkeleton"
import ProductCards from "./ProductCards"

type  typeGrid = {
    loading: boolean,
    arrayProduct: Product[]
}
const ProductGrid = ( { loading, arrayProduct } : typeGrid )=>{
    return (
        <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                { loading?
                Array.from( { length: 8 } ).map( (_, i ) =>( <CardProductSkeleton key={ i } />  ))
                :
                arrayProduct.map((product) => (
                    <ProductCards
                        key={product.id}
                       { ...product}
                    />
                )) 
                }
            
            </div>
        </section>
    )
}
export default ProductGrid