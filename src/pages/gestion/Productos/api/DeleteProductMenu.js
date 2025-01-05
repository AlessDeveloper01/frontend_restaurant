import axios from "axios";
export const deleteProductMenu = async (id) => {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/product/delete/${id}`, {
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
