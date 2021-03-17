// TELA GRANDE QUE MOSTRA CIDADE, ESTADO, ICONE, DATA E TEMPERATURA

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// IMPORTANDO GRADIENTE 
import { LinearGradient } from 'expo-linear-gradient';

// IMPORTANDO ICONES
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Header({ background, weather, icon }) {
    return (
        <LinearGradient
            style={styles.header}
            colors={background}
        >

            <Text style={styles.date}>{weather.time}</Text>
            <Text style={styles.date}>{weather.date}</Text>
            <Text style={styles.city}>{weather.city}</Text>

            <MaterialCommunityIcons name={icon.name} color="#FFF" size={150} />

            <Text style={styles.temp}>{weather.temp}°</Text>
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
        color: "white"
    },
    city: {
        fontSize: 17, color: "white",
        fontWeight: "bold"
    },
    temp: {
        fontSize: 80, color: "white",
        fontWeight: "bold"
    }
})