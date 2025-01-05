import axios from "axios";

export const updateProduct = async (id: number, name: string, stock: number) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/inventory/${id}`, { name, stock }, {
            headers: {
                Authorization: localStorage.getItem('restaurante_token')?.split(' ')[1]
            }
        }); 

        return response.data;
    } catch (error) {
        return error;
    }
}