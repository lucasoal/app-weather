// FUNÇÃO DE CONTROLE DA LISTA DO Forecast
// VERIFICA O TIPO DE CONDIÇÃO DE DADOS APRESENTADA PELA API
// SELECIONA O ICONE CORRETAMENTE

import { MaterialCommunityIcons } from '@expo/vector-icons';

export function condition(condition) {
    switch (condition) {
        case 'storm':
            return icon = { name: 'weather-lightning-rainy', color: '#1ec9ff' };
            break;
        case 'snow':
            return icon = { name: 'weather-snowy', color: '#1ec9ff' };
            break;
        case 'hail':
            return icon = { name: 'weather-hail', color: '#1ec9ff' };
            break;
        case 'rain':
            return icon = { name: 'weather-pouring', color: '#1ec9ff' };
            break;
        case 'fog':
            return icon = { name: 'weather-fog', color: '#1ec9ff' };
            break;
        case 'clear_day':
            return icon = { name: 'weather-sunny', color: '#1ec9ff' };
            break;
        case 'clear_night':
            return icon = { name: 'weather-night', color: '#1ec9ff' };
            break;
        case 'cloud':
            return icon = { name: 'weather-cloudy', color: '#1ec9ff' };
            break;
        case 'cloudly_day':
            return icon = { name: 'weather-partly-cloudy', color: '#1ec9ff' };
            break;
        case 'cloudly_night':
            return icon = { name: 'weather-night-partly-cloudy', color: '#1ec9ff' };
            break;
        default:
            return icon = { name: 'weather-cloudy-alert', color: '#1ec9ff' };
            break;
    }
};
