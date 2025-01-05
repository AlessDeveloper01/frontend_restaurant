import axios from "axios";

 export const getProductByName = async (name: string) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/product/search/${name}`, {
            headers: {
                Authorization: localStorage.getItem('restaurante_token')?.split(' ')[1]
            }
        });       

        return response.data;
    } catch (error) {
        return error;
    }
}