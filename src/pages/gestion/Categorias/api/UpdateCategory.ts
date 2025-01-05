import axios from "axios";

export const updateCategory = async (id: number, name: string, status: boolean) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/category/update/${id}`, {
            name,
            status
        }, {
            headers: {
                Authorization: localStorage.getItem('restaurante_token')?.split(' ')[1]
            }
        });

        return response.data;
    } catch (error) {
        return error;
    }
}