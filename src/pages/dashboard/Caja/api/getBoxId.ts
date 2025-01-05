import axios from "axios";

export const getResumeBox = async (id: string) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/box/resume/${id}`, {
            headers: {
                Authorization: localStorage.getItem("restaurante_token")?.split(" ")[1],
            },
        });
        return response.data;
    } catch (error) {
        return error;
    }
}