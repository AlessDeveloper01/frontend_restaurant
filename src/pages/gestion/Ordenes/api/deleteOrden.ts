import axios from "axios";

export const deleteOrden = async (id: number) => {

    try {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/order/delete/${id}`, {
            headers: {
                Authorization: localStorage.getItem('restaurante_token')?.split(' ')[1]
            }
        });

        return response.data
    } catch (error) {
        return error;
    }
}