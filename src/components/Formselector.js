import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback ,Animated} from 'react-native';
import { COLOURS } from '../database/items';

export const FormSelectorBtn = ({ title, backgroundColor,onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Animated.View style={[styles.container, { backgroundColor }]}>
                <Text style={styles.Text}>
                    {title}
                </Text>
            </Animated.View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: '50%',
        backgroundColor: '#1b1b33',
        justifyContent: 'center',
        alignItems: 'center',
    },

    Text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLOURS.black,
        letterSpacing: 1,
        marginRight: 10,
    }
})
