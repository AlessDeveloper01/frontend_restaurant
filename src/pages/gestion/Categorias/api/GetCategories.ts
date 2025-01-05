import axios from "axios";

export const getCategories = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/category/get`, {
            headers: {
                Authorization: localStorage.getItem('restaurante_token')?.split(' ')[1]
            }
        });
        return response.data;

    } catch (error) {
        return error;
    }
}