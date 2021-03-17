// QUADRO DE CONDIÇÕES QUE FICA ABAIXO DO HEADER

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// IMPORTANDO ICONES
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Conditions({ weather }) {
    return (
        // CONTAINER QUE FICARA AS CONDIÇÕES
        <View style={styles.container}>
            {/* CONDIÇÕES INDIVIDUAIS */}
            <View style={styles.conditions}>
                <Feather size={23} name="wind" color="#0f2f61" />
                <Text style={styles.text}>{weather.wind_speedy}</Text>
            </View>

            {/* CONDIÇÕES INDIVIDUAIS */}
            <View style={styles.conditions}>
                <Feather size={23} name="sunrise" color="#0f2f61" />
                <Text style={styles.text}>{weather.sunrise}</Text>
            </View>

            {/* CONDIÇÕES INDIVIDUAIS */}
            <View style={styles.conditions}>
                <Feather size={23} name="sunset" color="#0f2f61" />
                <Text style={styles.text}>{weather.sunset}</Text>
            </View>

            {/* CONDIÇÕES INDIVIDUAIS */}
            <View style={styles.conditions}>
                <Ionicons size={23} name="water-outline" color="#0f2f61" />
                <Text style={styles.text}>{weather.humidity}%</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // marginTop: "8%", padding: 15,
        // backgroundColor: "#FFF",
        // width: "85%", height: "12%",
        // borderRadius: 15, flexDirection: 'row',
        // justifyContent: 'space-around', color: '#0f2f61'
        marginTop: 20, padding: 5,
        backgroundColor: "#FFF",
        width: "85%", height: 70,
        borderRadius: 15, flexDirection: 'row',
        justifyContent: 'space-around', color: '#0f2f61'
    },
    conditions: {
        alignItems: 'center', justifyContent: 'center', color: '#0f2f61'
    },
    text: {
        color: '#0f2f61', fontSize: 13
    }
})