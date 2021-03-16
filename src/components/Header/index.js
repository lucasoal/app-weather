// TELA GRANDE QUE MOSTRA CIDADE, ESTADO, ICONE, DATA E TEMPERATURA

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// IMPORTANDO GRADIENTE 
import { LinearGradient } from 'expo-linear-gradient';

// IMPORTANDO ICONES
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
    return (
        <LinearGradient
            style={styles.header}
            colors={['#1ed6ff', '#93c1ff']}
        >
            <Text style={styles.date}>06/02/2000</Text>
            <Text style={styles.city}>CIDADE, UF</Text>

            <Ionicons
                name="cloud"
                color="#FFF"
                size={150}
            />

            <Text style={styles.temp}>30°</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "85%", height: "55%",
        alignItems: 'center', justifyContent: 'center',
        borderRadius: 15
    },
    date: {
        fontWeight: "bold", color: "white"
    },
    city: {
        fontSize: 20, color: "white",
        fontWeight: "bold"
    },
    temp: {
        fontSize: 80, color: "white",
        fontWeight: "bold"
    }
})