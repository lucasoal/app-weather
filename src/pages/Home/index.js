// referencia a pagina home do apk

import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native'; // importando estruturas de texto e view de tela
import { SafeAreaView } from 'react-native'; // controle do notch em mobile

// IMPORTANDO O COMPONENTE MENU
import Menu from '../../components/Menu';

// IMPORTANDO O HEADER
import Header from '../../components/Header';

// IMPORTANDO CONDITIONS
import Conditions from '../../components/Conditions';

// IMPORTANDO O FORECAST
import Forecast from '../../components/Forecast';

// LISTA FALSA
const mylist = [
    {
        "date": "16/03",
        "weekday": "Ter",
        "max": 26,
        "min": 18,
        "description": "Tempestades",
        "condition": "storm"
    },
    {
        "date": "17/03",
        "weekday": "Qua",
        "max": 27,
        "min": 17,
        "description": "Tempestades",
        "condition": "storm"
    },
    {
        "date": "18/03",
        "weekday": "Qui",
        "max": 27,
        "min": 18,
        "description": "Tempestades",
        "condition": "storm"
    },
    {
        "date": "19/03",
        "weekday": "Sex",
        "max": 26,
        "min": 18,
        "description": "Parcialmente nublado",
        "condition": "cloudly_day"
    },
    {
        "date": "20/03",
        "weekday": "Sáb",
        "max": 26,
        "min": 17,
        "description": "Parcialmente nublado",
        "condition": "cloudly_day"
    },
    {
        "date": "21/03",
        "weekday": "Dom",
        "max": 27,
        "min": 17,
        "description": "Parcialmente nublado",
        "condition": "cloudly_day"
    },
    {
        "date": "22/03",
        "weekday": "Seg",
        "max": 27,
        "min": 18,
        "description": "Tempo nublado",
        "condition": "cloud"
    },
    {
        "date": "23/03",
        "weekday": "Ter",
        "max": 28,
        "min": 18,
        "description": "Tempo nublado",
        "condition": "cloud"
    },
    {
        "date": "24/03",
        "weekday": "Qua",
        "max": 26,
        "min": 20,
        "description": "Tempestades",
        "condition": "storm"
    },
    {
        "date": "25/03",
        "weekday": "Qui",
        "max": 24,
        "min": 18,
        "description": "Tempestades",
        "condition": "storm"
    }
];


// Componente Home
// exportando o componente default TEM que ser letra maiúscula a inicial
export default function Home() {

    // retorno da função é apresentar essa view e texto
    return (
        <SafeAreaView style={styles.container}>
            <Menu />

            <Header />

            <Conditions />

            <FlatList
                style={styles.list}
                data={mylist} // DADOS QUE SERAO UTILIZADOS NA LISTA
                keyExtractor={item => item.date} // CHAVE DE BUSCA PARA ATUALIZAR OS DADOS
                renderItem={({ item }) => <Forecast data={item}/>} // RENDERIZAÇÃO DE CADA ITEM DA LISTA
                horizontal= {true}
                contentContainerStyle={{paddingHorizontal: '5%'}}
                // width= '85%'
                // marginBottom='5%'
                // marginTop='5%'
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
        paddingTop: '5%'
    },
    list: {
        backgroundColor: "white", borderRadius: 15,
        margin: 10, flexDirection: 'row',
    }
})