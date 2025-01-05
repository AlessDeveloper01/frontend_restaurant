import axios from "axios"

type Personal = {
    name: string,
    email: string,
    password: string,
    permissions: string
}

export const updateUserById = async (id: number, personal: Personal) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/user/${id}`, { name: personal.name, email: personal.email, password: personal.password, permissions: personal.permissions }, { 
            headers: {
                Authorization: `${localStorage.getItem('token')}`
            }
        })

        return response.data
    } catch (error) {
        return error
    }   
}