import axios from "axios";

export const getProductsCategory = async (category: string) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/product/get/${category}`, {
            headers: {
                Authorization: localStorage.getItem("restaurante_token")?.split(" ")[1],
            },
        });

        return response.data;
    } catch (error) {
        return error;
    }
}