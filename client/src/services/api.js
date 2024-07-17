import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getRole = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/role/${id}`);
        return response.data.role;
    } catch (error) {
        console.error('Error fetching role:', error);
        return null;
    }
};

export const getCodeBlock = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/codeblock/${id}`);
        return response.data.code;
    } catch (error) {
        console.error('Error fetching code block:', error);
        return '';
    }
};

export const updateCodeBlock = async (id, code) => {
    try {
        await axios.post(`${API_URL}/codeblock/${id}`, { code });
    } catch (error) {
        console.error('Error updating code block:', error);
    }
};
