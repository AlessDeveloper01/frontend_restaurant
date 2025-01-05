import axios from "axios";
export const getOrdersComplete = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/order/get/true`, {
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
