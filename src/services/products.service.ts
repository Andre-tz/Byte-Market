//este service se encargará de hacer la peticion y asu vez tipar los datos a como los usaré yo en mi ecommerce
import axiosInstance from "../api/axiosInstance";
import { type ApiProduct, type Product } from "../types/product.types";

const getApiProducts = async (): Promise<Product[]>=>{

    const { data } = await axiosInstance.get<ApiProduct[]>( "/products/?categorySlug=electronics" )

    return data.map( ( item)=>({
        id: item.id,
        name: item.title,
        price: item.price,
        images: item.images
   }))
}
export default getApiProducts;