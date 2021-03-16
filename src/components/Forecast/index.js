// FORECAST
// LISTA DE PREVISAO QUE FICA NO FIM DA APLICAÇÃO

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Forecast({data}) {
    return (
        <View style={styles.container}>
            <Text>{data.weekday}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginLeft: 20, paddingLeft: 15,
    }
});