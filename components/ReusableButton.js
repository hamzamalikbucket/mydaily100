import { StyleSheet, Text,TouchableOpacity } from 'react-native';
import React from 'react';

const ReusableButton = ({ onPress, text }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.btntext}>{text}</Text>
        </TouchableOpacity>
    );
}

export default ReusableButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#D11A38',
        height: 56,
        width: 353,
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius: 12,
    },
    btntext: {
        color: '#fff',
        textAlign: 'center',
        padding: 15,
        fontSize: 17,
        fontWeight: '500',
    },
})