import axios from "axios"

export const getAllProducts = async () => {
    try {
        const token = localStorage.getItem('restaurante_token');
        const splitToken = token?.split(' ')[1];
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/inventory/all`, {
            headers: {
                Authorization: splitToken
            }
        });

        return response.data;
    } catch (error) {
        return error
    }
}