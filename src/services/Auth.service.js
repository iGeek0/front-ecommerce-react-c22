import axios from 'axios';
const WS_PATH = import.meta.env.VITE_URL_API;


const loginService = async (data) => {
    console.log("Entro a loginService");
    const response = await axios.post(WS_PATH + '/login', data);
    return response;
};

// Registro de usuario

// .....

// Perfil de usuario

// .....

export {loginService};