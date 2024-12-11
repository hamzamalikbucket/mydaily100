import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Contact = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/frame30.png')} style={{ marginTop: 25, left: 15, }} />
            <Text style={styles.text}>Contact</Text>

            <View style={styles.box1}>
                <Text  style={styles.querytext}>Have a Query?</Text>
                <TouchableOpacity>
                <Image source={require('../assets/images/frame64.png')}/>
                </TouchableOpacity>
                <Text style={styles.text1}>Contact Us</Text>
            </View>
        </View>
    )
}

export default Contact;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 36,
        fontWeight: '600',
        textAlign: 'center',
        color: '#D11A38',
        marginTop: 25,
    },
    querytext:{
        marginTop: 25,
        fontSize: 18,
        fontWeight: '500',
    },
    box1: {
        backgroundColor: "#FFE6E6", // Light pink background
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        // shadowOffset: { width: 0, height: 2 },
        elevation: 5,
    },
    text1:{
        fontSize: 36,
        fontWeight: '400',
        textAlign: 'center',
        color: '#D11A38',
    },
})