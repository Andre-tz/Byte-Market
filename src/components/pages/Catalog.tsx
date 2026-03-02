import { useEffect } from "react";
import useProducts from "../../hooks/useProducts";

//este componente renderizará el catalogo inicial
const Catalog = ()=>{
    const { products } = useProducts();
    useEffect(()=>{console.log( products)},[products] )
    return (
        <h1>Catalogo</h1>
    )
}

export default Catalog;