import axios from "axios";
export const updateUserById = async (id, personal) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/user/${id}`, { name: personal.name, email: personal.email, password: personal.password, permissions: personal.permissions }, {
            headers: {
                Authorization: `${localStorage.getItem('token')}`
            }
        });
        return response.data;
    }
    catch (error) {
        return error;
    }
};
