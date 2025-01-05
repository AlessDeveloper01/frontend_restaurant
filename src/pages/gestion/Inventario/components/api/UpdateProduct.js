import axios from "axios";
export const updateProduct = async (id, name, stock) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/inventory/${id}`, { name, stock }, {
            headers: {
                Authorization: localStorage.getItem('restaurante_token')?.split(' ')[1]
            }
        });
        return response.data;
    }
    catch (error) {
        return error;
    }
};
