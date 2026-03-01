import { useEffect } from "react";
import getApiProducts from "../../services/products.service";

const Catalog = ()=>{
    useEffect(()=>{
        const fetchProducts = async ()=>{
            const products = await getApiProducts();
            console.log( products )
        }
        fetchProducts()
    },[])

    return (
        <h1>Catalogo</h1>
    )
}

export default Catalog;