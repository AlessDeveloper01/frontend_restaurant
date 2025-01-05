import axios from "axios";
export const updateOrder = async (data) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/order/update/${data.id}`, { status: data.status }, {
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
