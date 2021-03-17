// API DE LOCALIZACAO
// UTILIZANDO AXIOS PARA FAZER REQUEST HTTPS

// https://api.hgbrasil.com/weather?key=aac867c0&lat=-23.682&lon=-46.875

import axios from 'axios';

// EXPORTA A CHAVE DE REQUISIÇÃO
export const key = 'aac867c0';

const api = axios.create({

    // URL BASE PARA UTILIZAR
    // NUNCA VAI SE REPETIR 
    baseURL: 'https://api.hgbrasil.com'
});

export default api;