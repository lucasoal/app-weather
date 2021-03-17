// API DE LOCALIZACAO
// UTILIZANDO AXIOS PARA FAZER REQUEST HTTPS

// https://api.hgbrasil.com/weather?key=********&lat=-23.682&lon=-46.875

// import axios
import axios from 'axios';

// EXPORTA A CHAVE DE REQUISIÇÃO
export const key = '029f3a7f';

const api = axios.create({

    // URL BASE PARA UTILIZAR
    // NUNCA VAI SE REPETIR 
    baseURL: 'https://api.hgbrasil.com'
});

export default api;

// ATENÇÃO !!!!!!!!
// - A API EXIGE UMA KEY PARA FUNCIONAR
// - PERMITE A BUSCA DE 10 CIDADES DIFERENTES/DIA
// - CASO A TELA INICIAL "TRAVE", VERIFIQUE NO CONSOLE 
// HÁ UM UM ERRO DE NA REQUEST DO AXIOS