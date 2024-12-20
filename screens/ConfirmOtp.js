import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import ReusableButton from "../components/ReusableButton";

const ConfirmOtp = () => {
    const navigation = useNavigation();
    return (
        <ScrollView  style={styles.container}>
            <Text style={styles.title}>Verify your Email </Text>
            <Text style={styles.subtitle}>
                We already sent a code to your email{"\n"}
                jhon@*****.com.please input below to{"\n"}
                confirm your email address{"\n"}
            </Text>
            <Text style={styles.text}>Enter Code here:</Text>
            <TouchableOpacity>
                <Image source={require('../assets/images/frame14.png')} style={styles.frame14} />
            </TouchableOpacity>
            <ReusableButton text="Confirm" onPress={() => navigation.navigate('VerifiedOtp')} />
            <View style={styles.grouptext}>
                <Text style={styles.text1}>Expire in 00.59</Text>
                <Text style={styles.text2}>Resend code</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        marginTop: '30%',
        color: '#D11A38',
        fontSize: 36,
        fontWeight: '600',
        alignSelf: 'center',
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '500',
        alignSelf: 'center',
    },
    text: {
        textAlign: 'center',
        color: '#D11A38',
        marginTop: '5%',
        fontSize: 16,
    },
    frame14: {
        marginTop: '6%',
        alignSelf: 'center',
    },
    grouptext: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    text1: {
        marginLeft: 20,
        fontSize: 16,
    },
    text2: {
        marginRight: 20,
        fontSize: 16,
    },

})

export default ConfirmOtp;