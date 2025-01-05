import axios from "axios";
export const getOrderById = async (id) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/order/get-one/${id}`, {
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
