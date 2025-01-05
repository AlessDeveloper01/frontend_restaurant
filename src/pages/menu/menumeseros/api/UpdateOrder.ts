import axios from "axios";

interface Data {
    total: number;
    date: Date;
    products: {
        productId: number;
        quantity: number;
    }[];
}

export const UpdateOrder = async (id:number, data: Data) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/order/update/${id}`, data, {
            headers: {
                Authorization: localStorage.getItem('restaurante_token')?.split(' ')[1]
            }
        });

        return response.data;
    } catch (error) {
        return error;
    }
};