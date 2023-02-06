import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { COLOURS } from '../database/items';


export const Submmitbtn = ({ tittle ,onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>
                {tittle}
            </Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
       
        height: 45,
        backgroundColor: COLOURS.accent,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'

    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLOURS.black,
        letterSpacing: 1,
        marginRight: 10,
    }


})
