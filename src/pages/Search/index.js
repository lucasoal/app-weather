// página de search do apk

import React, { useState } from 'react'; // biblioteca
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Keyboard } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// IMPORTAR API PARA PODER PESQUISAR
import api, { key } from '../../services/api';

import { LinearGradient } from 'expo-linear-gradient';
import Conditions from '../../components/Conditions';


// exportando para permitir que o componente seja utilizado em outros diretorios
// LETRA MAIÚSCULA PARA COMPONENTES
export default function Search() {

    const navigation = useNavigation();

    // USE STATE PARA ENTRADA DE PESQUISA PELO USUÁRIO
    const [input, setInput] = useState('');

    // USE STATE PARA ARMAZENAR A PESQUISA FEITA PELO USUÁRIO
    const [city, setCity] = useState(null);

    // USE STATE CASO OCORRA UM ERRO
    const [error, setError] = useState(null);

    const [weather, setWeather] = useState([]);


    // FUNÇÃO DE PESQUISA
    async function handleSearch() {
        // https://api.hgbrasil.com/weather?key=aac867c0&city_name=Campinas,SP

        const response = await api.get(`/weather?key=${key}&city_name=${input}`);
        // console.log(response.data);

        // VERIFICAÇÃO DE CIDADE
        if (response.data.by === 'default') {
            setError('Ops... Cidade não encontrada!');
            setInput('');
            setCity(null);
            Keyboard.dismiss();
            return;
        }

        setCity(response.data);
        setInput('');
        Keyboard.dismiss();
    }

    if (city) {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.backButtom} onPress={() => navigation.navigate('Home')}>
                    <Feather
                        name="chevron-left"
                        size={32}
                        color='#0f2f61'
                    /><Text style={{ fontSize: 22, color: '#0f2f61' }}>Voltar</Text>
                </TouchableOpacity>

                <View style={styles.searchBox}>
                    {/*  */}
                    <TextInput
                        value={input}
                        onChangeText={(valor) => setInput(valor)}
                        placeholder="Ex: Campinas, SP"
                        style={styles.input}
                    />
                    {/* BOTAO DE PESQUISA */}
                    <TouchableOpacity style={styles.icon} onPress={handleSearch}>
                        <Feather
                            name="search"
                            size={32}
                            color='#E8F0FF'
                        />
                    </TouchableOpacity>
                </View>

                <LinearGradient
                    style={styles.header}
                    colors={['#1ed6ff', '#97c1ff']}
                >
                    <Text style={styles.date}>{city.results.date}</Text>
                    <Text style={styles.city}>{city.results.city}</Text>
                    <View>
                        <Text style={styles.temp}>{city.results.temp}°</Text>
                    </View>

                    <Conditions
                        weather={city.results}
                    />

                </LinearGradient>

            </SafeAreaView>
        );
    }

    return (

        // BOTAO DE VOLTAR
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButtom} onPress={() => navigation.navigate('Home')}>
                <Feather
                    name="chevron-left"
                    size={32}
                    color='#0f2f61'
                /><Text style={{ fontSize: 22, color: '#0f2f61' }}>Voltar</Text>
            </TouchableOpacity>

            {/* CAIXA DE PESQUISA */}
            <View style={styles.searchBox}>
                {/*  */}
                <TextInput
                    value={input}
                    onChangeText={(valor) => setInput(valor)}
                    placeholder="Ex: Campinas, SP"
                    style={styles.input}
                />
                {/* BOTAO DE PESQUISA */}
                <TouchableOpacity style={styles.icon} onPress={handleSearch}>
                    <Feather
                        name="search"
                        size={32}
                        color='#E8F0FF'
                    />
                </TouchableOpacity>
            </View>

            {error && <Text style={{ marginTop: 25, fontSize: 20, color: '#0f2f61' }}>{error}</Text>}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center',
        paddingTop: '10%', backgroundColor: '#E8F0FF',
    },
    backButtom: {
        flexDirection: 'row', alignItems: 'center',
        marginLeft: '5%', alignSelf: 'flex-start',
        marginBottom: '5%', zIndex: 9, shadowColor: 'black'
    },
    searchBox: {
        alignItems: 'center', flexDirection: 'row',
        width: '85%',
        height: 50, borderRadius: 20, zIndex: 9, shadowColor: 'black'
    },
    input: {
        width: "85%", height: 50, paddingLeft: 20,
        backgroundColor: '#fff',
        borderTopLeftRadius: 10, borderBottomLeftRadius: 10,
        alignItems: 'center', justifyContent: 'center',
    },
    icon: {
        width: '15%', alignItems: 'center',
        justifyContent: 'center', backgroundColor: '#0f2f61',
        height: 50,
        borderTopRightRadius: 10, borderBottomRightRadius: 10,
    },
    header: {
        marginTop: '10%', width: '95%',
        paddingTop: '10%', paddingBottom: '10%',
        borderRadius: 15, alignItems: 'center',
        justifyContent: 'space-between',
    },
    date: {
        color: 'white'
    },
    city: {
        color: 'white', fontWeight: 'bold'

    },
    temp: {
        color: 'white', fontWeight: 'bold',
        fontSize: 90
    }
})