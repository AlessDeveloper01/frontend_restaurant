import axios from "axios";
export const CreateOrder = async (data) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/order/create`, data, {
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
