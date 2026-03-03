//este hook se encargará de hacer las peticiones a las Apis

import { useEffect, useState } from "react";
import getProducts from "../services/products.service";
import type { Product } from "../types/product.types";

const useProducts = ()=>{
    const [ products, setProducts ] = useState<Product[]>( [] )
    const [ loading, setLoading ] = useState<boolean>( true );
    const [ error, setError ] = useState<string|null >( null );

    useEffect(()=>{
        const fetchProducts =  async ()=>{
            try{
                const data = await getProducts()
                setProducts( data );
            }catch( error ){
                const message = error instanceof Error? error.message : "Error desconocido"
                setError( message )
            }finally{
                setLoading( false )
            }
        }
        fetchProducts();
    }, [] )
    return { products, loading, error }
}
export default useProducts;