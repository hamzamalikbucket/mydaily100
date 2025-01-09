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
                <View style={{ flexDirection: 'row', marginTop: 15, left: 12 }}>
                    <Icon name='chevron-left' size={28} color='gray' />
                    <Text style={{ fontSize: 20, color: 'gray' }}>Back</Text>
                </View>
            </TouchableOpacity>

            <Text style={styles.title}>Verify your Email</Text>
            <Text style={styles.subtitle}>
                We already sent a code to your email{"\n"}
                jhon@*****.com.please input below to{"\n"}
                confirm your email address.
            </Text>
            <Text style={styles.text}>Enter Code here:</Text>
            <View style={styles.otpContainer}>
                <OtpInput
                    style={styles.inputBox}
                    numberOfDigits={5}
                    otp={otp}
                    onTextChange={setOtp}
                    focusColor="#D11A38"
                />
            </View>
            <View style={{ marginTop: 20 }}>
                <ReusableButton text="Confirm" onPress={() => handleOTP(otp)} />
            </View>
            <View style={styles.grouptext}>
                <Text style={{ color: '#898989' }}>Expire in 00.59</Text>
                <Text style={{ color: '#898989' }}>Resend code</Text>
            </View>

            <Modal visible={OpenModal}
                animationType="slide"
                transparent={true}>
                <View style={styles.modalicon}>
                    <TouchableOpacity style={styles.closeButton}
                        onPress={() => {
                            setOpenModal(false);
                            navigation.navigate("ProfilePage");
                        }}>
                        <Icon name="close" size={28} color="#D11A38" />
                    </TouchableOpacity>
                    <View style={styles.modalContent}>
                        <Image source={require('../assets/images/frame16.png')} />
                        <Text style={styles.maintext1}>Successfully Verified</Text>
                        <Text style={styles.maintext2}>Your account is set now,we will redirect you to </Text>
                        <Text> profile information</Text>

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
        marginTop: 30,
        color: '#D11A38',
        fontSize: 34,
        fontWeight: '500',
        alignSelf: 'center',
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '500',
        alignSelf: 'center',
        color: '#878787',
    },
    text: {
        textAlign: 'center',
        color: '#D11A38',
        marginVertical: 20,
        fontSize: 18,
        fontWeight: '400',
    },
    grouptext: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 10,
        top: 30,
    },

    otpContainer: {
        padding: 10,
        fontSize: 12,
        color: 'black',
        borderRadius: 12,
        marginVertical: 10,
        marginHorizontal: 25,
    },
    inputBox: {
        width: 50,               
        height: 50,             
        marginHorizontal: 8,      
        borderWidth: 1,           
        borderColor: 'black',
        borderRadius: 8,         
        textAlign: 'center',     
        fontSize: 12,             
        color: '#D11A38',         
        backgroundColor: '#fff',  
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
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 15,
    },

})

export default OtpPage;