import axios from "axios";
export const UpdateProductMenu = async (id, name, price, categoria, ingredient, status) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/product/update/${id}`, {
            name,
            status,
            price,
            category: categoria,
            ingredients: ingredient
        }, {
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
