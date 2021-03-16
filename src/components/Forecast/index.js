// FORECAST
// LISTA DE PREVISAO QUE FICA NO FIM DA APLICAÇÃO
// MOSTRA 10 DIAS

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

// IMPORTA FUNÇÃO DE CONTROLE DE ICONES
import  { condition }  from '../../utils/condition';

export default function Forecast({ data }) {

    // CHAMA FUNÇÃO DE CONTROLE DE ICONES DO FORECAST
    let icon = condition(data.condition);

    return (
        <View style={styles.container}>
            <Text style={styles.date}>{data.date}</Text>

            <MaterialCommunityIcons name={icon.name} color={icon.color} size={30} />

            <View style={styles.temp}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>{data.max}°</Text>
                <Text style={{ fontStyle: 'italic', fontSize: 15 }}>{data.min}°</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginLeft: 12, borderRadius: 15,
        paddingTop: 10, paddingBottom: 10,
        paddingLeft: 15, paddingRight: 15,
        alignItems: 'center', justifyContent: 'space-around'
    },
    weekday: {
        fontWeight: 'bold'
    },
    temp: {
        alignItems: 'center',
    }
});