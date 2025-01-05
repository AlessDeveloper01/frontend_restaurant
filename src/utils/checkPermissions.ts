import axios from 'axios';

const checkPermissions = async (requiredPermissions: string[]): Promise<boolean> => {

        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/profile`, {
                headers: {
                    Authorization: localStorage.getItem("restaurante_token"),
                },
            });
    
            const { permissions } = response.data;
            const hasPermission = requiredPermissions.some((permission) => permissions.includes(permission));
            
            if (!hasPermission) {
                console.error(`Permission check failed for permissions: ${requiredPermissions}`);
            }
    
            return hasPermission;
        } catch (error) {
            console.error(error);
            return false;
        }

};

export default checkPermissions;