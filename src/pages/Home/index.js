// referencia a pagina home do apk

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'; // importando estruturas de texto e view de tela
import { SafeAreaView } from 'react-native'; // controle do notch em mobile

// IMPORTANDO API
import api, { key } from '../../services/api';

import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

// IMPORTANDO TODAS(*) AS DISPONIBILIDADES DO EXPO LOCATION
import * as Location from 'expo-location';

// IMPORTANDO O COMPONENTE MENU
import Menu from '../../components/Menu';

// IMPORTANDO O HEADER
import Header from '../../components/Header';

// IMPORTANDO CONDITIONS
import Conditions from '../../components/Conditions';

// IMPORTANDO O FORECAST
import Forecast from '../../components/Forecast';

// Componente Home
// exportando o componente default TEM que ser letra maiúscula a inicial
export default function Home() {

    // USE STATE DE MENSAGEM DE ERRO
    const [errorMsg, setErrorMsg] = useState(null);

    // USE STATE DE LOADING
    const [loading, setLoading] = useState(true);

    // USE STATE WEATHER
    // USE STATE PARA PEGAR OS DADOS DO LOCATION
    const [weather, setWeather] = useState([]);

    // USE STATE DE ICON E BACKGROUND INICIAL
    const [icon, setIcon] = useState({ name: 'cloud', color: '#FFF' });
    const [background, setBackground] = useState(['#1ed6ff', '#97c1ff']);

    // EFEITO INICIAL PARA QUANDO O APP ABRIR
    // PEDIRA AO USUARIO PARA ACESSAR A LOCALIZACAO
    useEffect(() => {

        (async () => {
            // PEGA O STATUS DO REQUEST DA LOCALIZAÇÃO
            // AWAIT FAZ ESPERAR O RESULTADO
            let { status } = await Location.requestPermissionsAsync();

            // VERIFICA A CONDIÇÃO DO STATUS
            if (status !== 'granted') {
                setErrorMsg('Acesso à localização negado!');
                setLoading(false);
                return;
            }

            // COLETANDO A LOCALIZACAO DO USUÁRIO
            let location = await Location.getCurrentPositionAsync({});

            // weather?key=aac867c0&lat=-23.682&lon=-46.875
            // FAZ O REQUEST PARA A API BUSCAR OS DADOS DE LOCALIZAÇÃO ESPECÍFICOS
            const response = await api.get(`/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`);

            // console.log(response.data.results);

            // COLOCA AS INFORMAÇÕES DENTRO DA USE STATE
            setWeather(response.data.results);

            // VERIFICA SE É DIA OU NOITE
            if (response.data.results.currently !== 'dia') {
                setBackground(['#0c3741', '#0f2f61']);
            };

            // VERIFICA ICONES PRINCIPAL DO HEADER
            switch (response.data.results.condition_slug) {
                case 'storm':
                    setIcon({ name: 'weather-lightning-rainy', color: '#0f2f61' });
                    break;
                case 'snow':
                    setIcon({ name: 'weather-snowy', color: '#0f2f61' });
                    break;
                case 'hail':
                    setIcon({ name: 'weather-hail', color: '#0f2f61' });
                    break;
                case 'rain':
                    setIcon({ name: 'weather-pouring', color: '#0f2f61' });
                    break;
                case 'fog':
                    setIcon({ name: 'weather-fog', color: '#0f2f61' });
                    break;
                case 'clear_day':
                    setIcon({ name: 'weather-sunny', color: '#0f2f61' });
                    break;
                case 'clear_night':
                    setIcon({ name: 'weather-night', color: '#0f2f61' });
                    break;
                case 'cloud':
                    setIcon({ name: 'weather-cloudy', color: '#0f2f61' });
                    break;
                case 'cloudly_day':
                    setIcon({ name: 'weather-partly-cloudy', color: '#0f2f61' });
                    break;
                case 'cloudly_night':
                    setIcon({ name: 'weather-night-partly-cloudy', color: '#0f2f61' });
                    break;
                default:
                    setIcon({ name: 'cloud-offline', color: '#0f2f61' });
                    break;
            }

            setLoading(false);

        })();

    }, []);

    if (loading === true) {
        return (
            <View style={styles.loading}>
                <Text style={{
                    fontSize: 20,
                    fontStyle: 'italic', color: 'white'
                }}>Carregando dados...</Text>
                <Text style={{
                    fontSize: 20,
                    fontStyle: 'italic', color: 'white',
                    marginTop: '5%'
                }}>Caso haja demora no carregamento, é possível que o servidor esteja fora do ar.</Text>
            </View>
        )
    };

    // retorno da função é apresentar essa view e texto
    return (
        <SafeAreaView style={styles.container}>
            <Menu />

            <Header background={background} weather={weather} icon={icon} />

            <Conditions weather={weather} />

            <FlatList
                style={styles.list}
                data={weather.forecast} // DADOS QUE SERAO UTILIZADOS NA LISTA
                keyExtractor={item => item.date} // CHAVE DE BUSCA PARA ATUALIZAR OS DADOS
                renderItem={({ item }) => <Forecast data={item} />} // RENDERIZAÇÃO DE CADA ITEM DA LISTA
                horizontal={true}
                contentContainerStyle={{ padding: '3%' }}
                width="100%"
            />
        </SafeAreaView>
    )
}

// grupo de estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e9f0ff',
        paddingTop: '6%'
    },
    list: {
        marginTop: 10, flexDirection: 'row',
        marginBottom: 10, marginLeft: 0,
    },
    loading: {
        flex: 1, backgroundColor: '#0f2f61',
        alignItems: 'center', justifyContent: 'center',
        padding: 20,
    }
})