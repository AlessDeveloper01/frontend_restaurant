import axios from "axios";
export const createProduct = async (name, stock) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/inventory/create`, { name, stock }, {
            headers: {
                Authorization: localStorage.getItem("restaurante_token")?.split(" ")[1],
            },
        });
        return response.data;
    }
    catch (error) {
        return error;
    }
};
