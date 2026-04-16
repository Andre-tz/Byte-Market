//este service se encargará de hacer la peticion y asu vez tipar los datos a como los usaré yo en mi ecommerce
import axiosInstance from "../api/axiosInstance";
import { localProducts } from "../data/localProducts";
import { type ApiProduct, type Product } from "../types/product.types";

const getProducts = async (): Promise<Product[]>=>{

    const { data } = await axiosInstance.get<ApiProduct[]>( "/products/?categorySlug=electronics" )

    const normalizedProducts = data.map( ( item)=>({
        id: item.id,
        name: item.title,
        price: item.price,
        images: item.images,
        category: "api",
        stock: Math.floor( Math.random()* 10 ) + 1
   }))

   const mergeProducts = [ ...normalizedProducts, ...localProducts]
   return mergeProducts;
}
export default getProducts;