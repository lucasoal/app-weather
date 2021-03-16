// QUADRO DE CONDIÇÕES QUE FICA ABAIXO DO HEADER

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// IMPORTANDO ICONES
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Conditions() {
    return (
        // CONTAINER QUE FICARA AS CONDIÇÕES
        <View style={styles.container}>
            {/* CONDIÇÕES INDIVIDUAIS */}
            <View style={styles.conditions}>
                <Feather size={23} name="wind" color="#1ed6ff" />
                <Text>7km/h</Text>
            </View>

            {/* CONDIÇÕES INDIVIDUAIS */}
            <View style={styles.conditions}>
                <Feather size={23} name="sunrise" color="#1ed6ff" />
                <Text>6:32am</Text>
            </View>

            {/* CONDIÇÕES INDIVIDUAIS */}
            <View style={styles.conditions}>
                <Feather size={23} name="sunset" color="#1ed6ff" />
                <Text>6:50pm</Text>
            </View>

            {/* CONDIÇÕES INDIVIDUAIS */}
            <View style={styles.conditions}>
                <Feather size={23} name="droplet" color="#1ed6ff" />
                <Text>80%</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: "5%", padding: 15,
        backgroundColor: "#FFF",
        width: "85%", height: "12%",
        borderRadius: 15, flexDirection: 'row',
        justifyContent: 'space-around'
    },
    conditions: {
        alignItems: 'center', justifyContent: 'center'
    }
})