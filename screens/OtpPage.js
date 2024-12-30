import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, SafeAreaView, Alert, Modal } from 'react-native';
import ReusableButton from "../components/ReusableButton";
import { OtpInput } from "react-native-otp-entry";
import Icon from 'react-native-vector-icons/MaterialIcons';

const OtpPage = () => {
    const navigation = useNavigation();
    const [otp, setOtp] = useState('');
    const [OpenModal, setOpenModal] = useState(false);

    const handleOTP = () => {
        if (otp == '12345') {
            setOpenModal(true);
        } else {
            Alert.alert('Invalid OTP. Please try again.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.icon}>
                    <Icon name='chevron-left' size={26} color='gray' />
                    <Text style={styles.icontext}>Back</Text>
                </View>
            </TouchableOpacity>

            <Text style={styles.title}>Verify your Email</Text>
            <Text style={styles.subtitle}>
                We already sent a code to your email{"\n"}
                jhon@*****.com.please input below to{"\n"}
                confirm your email address.
            </Text>
            <Text style={styles.text}>Enter Code here:</Text>
            <View>
                <OtpInput
                    style={styles.otpInput}
                    numberOfDigits={5}
                    otp={otp}
                    onTextChange={setOtp}
                    codeInputFieldStyle={styles.inputField}
                />
            </View>
            <ReusableButton text="Confirm" onPress={() => handleOTP(otp)} />
            <View style={styles.grouptext}>
                <Text style={styles.text1}>Expire in 00.59</Text>
                <Text style={styles.text2}>Resend code</Text>
            </View>

            <Modal visible={OpenModal} animationType="slide"
                transparent={true}>
                    <View style={styles.modalicon}>
                        <View style={styles.modalContent}>
                            <Image source={require('../assets/images/frame16.png')} />
                            <Text style={styles.maintext1}>Successfully Verified</Text>
                            <Text style={styles.maintext2}>Your account is set now,we will redirect you to </Text>
                            <Text> profile information</Text>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => { setOpenModal(false);
                                navigation.navigate("ProfilePage");
                                }}>
                                <Text style={styles.buttonText}>Okay</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </Modal>

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
        marginTop: 20,
        fontSize: 18,
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
        fontSize: 14,
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
   
    modalicon: {
        backgroundColor: "white",
        borderRadius: 12,
        width: "100%",
        height: "100%",
    },
    modalContent: {
        alignItems: "center",
        marginTop: 250,
    },
    maintext1: {
        fontSize: 34,
        fontWeight: '600',
        color: "#D11A38",
    },
    maintext2: {
        fontSize: 15,
        fontWeight: '400',
    },
    button: {
        backgroundColor: "#D11A38",
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: '500',
    },
})

export default OtpPage;