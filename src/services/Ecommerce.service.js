import axios from 'axios';
const WS_PATH = import.meta.env.VITE_URL_API;


const getProducts = async () => {
    const response = await axios.get(WS_PATH + '/products');
    return response;
};

const getProduct = async (id) => {
    const response = await axios.get(`${WS_PATH}/products?id=${id}`);
    return response.data;
};

const getProfile = async () => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem(import.meta.env.VITE_TKN_NAME)}` }
    };
    const response = await axios.get(`${WS_PATH}/users`, config);
    return response.data;
};

const putProfile = async (data) => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem(import.meta.env.VITE_TKN_NAME)}` }
    };
    const response = await axios.put(`${WS_PATH}/users`, data, config);
    return response.data;
};

export {getProducts, getProduct, getProfile, putProfile};