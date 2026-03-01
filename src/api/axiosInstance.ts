//sirve para tener una configuración central de tus peticiones HTTP.
import axios from "axios";

const axiosInstance = axios.create( {
    baseURL : "https://api.escuelajs.co/api/v1",
    timeout: 5000,
} )

export default axiosInstance;