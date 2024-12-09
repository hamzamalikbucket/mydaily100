import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const OtpPage = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/frame10.png')} style={styles.frame10} />
            <Text style={styles.text}>Enter Code here:</Text>
            <TouchableOpacity>
                <Image source={require('../assets/images/frame11.png')} style={styles.frame11} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ConfirmOtp')}>
                <Image source={require('../assets/images/frame12.png')} style={styles.frame12} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Image source={require('../assets/images/frame13.png')} style={styles.frame13} />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    frame10: {
        marginTop: '20%',
        alignSelf: 'center',
    },
    text: {
        textAlign: 'center',
        color: '#D11A38',
        marginTop: 45,
        fontSize: 16,
    },
    frame11: {
        marginTop: '6%',
        alignSelf: 'center',
    },
    frame12: {
        alignSelf: 'center',
    },
    frame13: {
        alignSelf: 'center',
    },
})

export default OtpPage;