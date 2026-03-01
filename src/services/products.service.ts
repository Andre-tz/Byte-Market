import axiosInstance from "../api/axiosInstance";

const getApiProducts = async ()=>{
    const { data } = await axiosInstance.get( "/products/?categorySlug=electronics" )
    return data 
}
export default getApiProducts;