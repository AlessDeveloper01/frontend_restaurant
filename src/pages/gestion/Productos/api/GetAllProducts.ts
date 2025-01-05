import axios from 'axios';

export const getAllProducts = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/product/all`, {
            headers: {
                Authorization: localStorage.getItem('restaurante_token')?.split(' ')[1]
            }
        });
        return response.data;
    } catch (error) {
        return error;
    }
}