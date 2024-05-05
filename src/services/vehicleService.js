import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchVehicles = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/vehicles/vehicles/`);
        return response.data;  // Assuming the server responds with the array of vehicles
    } catch (error) {
        console.error('Error fetching vehicles:', error);
        throw error;
    }
};

export const deleteVehicle = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/vehicles/vehicles/${id}/`);
        return response.status === 204;  // Assuming 204 No Content on successful deletion
    } catch (error) {
        console.error('Error deleting vehicle:', error);
        throw error;
    }
};

// export const updateVehicle = async(id)=>{
//     try {
//         const response = await axios.put(`${API_BASE_URL}/vehicles/vehicles/${id}/`);
//         return response.status === 204;  // Assuming 204 No Content on successful deletion
//     } catch (error) {
//         console.error('Error deleting vehicle:', error);
//         throw error;
//     }
// }

export const updateVehicle = async (id, data) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/vehicles/vehicles/${id}/`, data);
        return response.data;  // This should return the updated vehicle data if successful
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};


