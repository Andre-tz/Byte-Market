import { useState } from "react"
import type { Product } from "../../types/product.types"
import AuthRequiredModal from "../modals/AuthRequiredModal"
import CardProductSkeleton from "../ui/CardProductSkeleton"
import ProductCards from "./ProductCards"

type  typeGrid = {
    loading: boolean,
    arrayProduct: Product[]
}
const ProductGrid = ( { loading, arrayProduct } : typeGrid )=>{
    const [ showModal, setShowModal ] = useState<boolean>( false )

    const handleModal = () => {
        setShowModal( !showModal )
    }
    return (
        <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                { loading?
                Array.from( { length: 8 } ).map( (_, i ) =>( <CardProductSkeleton key={ i } />  ))
                :
                arrayProduct.map((product) => (
                    <ProductCards
                        key={product.id}
                        showModal={ handleModal }
                       { ...product}
                    />
                )) 
                }
            
            </div>
            {
                showModal && 
                <AuthRequiredModal
                    closeModal= { handleModal }
                />
            }
        </section>
    )
}
export default ProductGrid
