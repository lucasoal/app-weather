// MENU FLUTUANTE CANTO SUPERIOR ESQUERDO
// BOLINHA FLUTUANTE

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// IMPORTANDO ICONES DO EXPO
import { Feather } from '@expo/vector-icons';
// IMPORTANDO UM HOOKER
// VAI CHAMAR UMA FUNÇÃO QUANDO ACIONADO
import { useNavigation } from '@react-navigation/native';


export default function Menu() {

    // DECLARANDO A VARIAVEL navigation 
    const navigation = useNavigation();

    return (
        // BOTAO DE MENU
        <TouchableOpacity style={styles.container} onPress={() => navigation.openDrawer()}>

            <Feather
                name='menu'
                size={36}
                color='black'
            />

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 9, // coloca o menu numa camada acima
        width: 70, height: 70,
        backgroundColor: 'white',
        alignItems: 'center', justifyContent: 'center',
        left: 20, top: 40,
        borderTopLeftRadius: 10, borderTopRightRadius: 50,
        borderBottomLeftRadius: 50, borderBottomRightRadius: 50,
        elevation: 5
    }
});