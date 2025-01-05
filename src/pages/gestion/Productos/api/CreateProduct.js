import axios from "axios";
export const createProduct = async (name, price, category, ingredients, status) => {
    try {
        const categoryNumber = parseInt(category);
        const ingredientsNumber = ingredients.map((item) => parseInt(item));
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/product/create`, {
            name,
            price,
            category: categoryNumber,
            ingredients: ingredientsNumber,
            status
        }, {
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
