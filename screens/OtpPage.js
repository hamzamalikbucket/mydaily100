import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import ReusableButton from "../components/ReusableButton";
import { OtpInput } from "react-native-otp-entry";
import Icon from 'react-native-vector-icons/MaterialIcons';

const OtpPage = () => {
    const navigation = useNavigation();
    const [otp, setOtp] = useState('');

    const handleOTP = () => {
        console.log('otp', otp);
        if (otp == '12345') {
            navigation.navigate('VerifiedOtp')
        } else {
            console.log('Invalid OTP. Please try again.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <View style={styles.icon}>
                    <Icon name='chevron-left' size={26} color='gray' />
                    <Text style={styles.icontext}>Back</Text>
                </View>
            </TouchableOpacity>

            <Text style={styles.title}>Verify your Email</Text>
            <Text style={styles.subtitle}>
                We already sent a code to your email{"\n"}
                jhon@*****.com.please input below to{"\n"}
                confirm your email address{"\n"}
            </Text>
            <Text style={styles.text}>Enter Code here:</Text>
            <View>
                <OtpInput
                    style={styles.otpInput}
                    numberOfDigits={5}
                    otp={otp}
                    onTextChange={setOtp}
                    codeInputFieldStyle={styles.inputField}
                    onFilled={(text) => console.log(`OTP is ${text}`)}
                />
            </View>
            <ReusableButton text="Confirm" onPress={() => handleOTP(otp)} />
            <View style={styles.grouptext}>
                <Text style={styles.text1}>Expire in 00.59</Text>
                <Text style={styles.text2}>Resend code</Text>
            </View>
        </SafeAreaView>
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
        marginTop: '10%',
        fontSize: 16,
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
    otpInput: {
        height: 100,
    },
    inputField: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: 'lightgrey',
        fontSize: 24,
        borderRadius: 12,
    },
    icon: {
        flexDirection: 'row',
        marginTop: 15,
        left: 12,
    },
    icontext: {
        fontSize: 20,

    },
})

export default OtpPage;