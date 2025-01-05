import axios from "axios";

export const createCategory = async (name: string, status: boolean) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/category/create`, { name, status }, {
            headers: {
                Authorization: localStorage.getItem('restaurante_token')?.split(' ')[1]
            }
        })

        return response.data;
    } catch (error) {
        return error
    }
};