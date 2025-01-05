import axios from "axios";

export const CloseBox = async () => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/box/close`, {}, {
            headers: {
                Authorization: localStorage.getItem('restaurante_token')?.split(' ')[1]
            }
        });

        return response.data;
    } catch (error) {
        return error;
    }
}