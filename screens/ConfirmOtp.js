import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const ConfirmOtp = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/frame10.png')} style={styles.frame10} />
            <Text style={styles.text}>Re-enter Code here:</Text>
            <TouchableOpacity>
                <Image source={require('../assets/images/frame14.png')} style={styles.frame14} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('VerifiedOtp')}>
                <Image source={require('../assets/images/frame12.png')} style={styles.frame12} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Image source={require('../assets/images/frame13.png')} style={styles.frame13} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('../assets/images/frame15.png')} style={styles.frame15} />
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
    frame14: {
        marginTop: '6%',
        alignSelf: 'center',
    },
    frame12: {
        alignSelf: 'center',
    },
    frame13: {
        alignSelf: 'center',
    },
    frame15: {
        marginTop: '20%',
        alignSelf: "center",
        width: '100%',

    },
})

export default ConfirmOtp;