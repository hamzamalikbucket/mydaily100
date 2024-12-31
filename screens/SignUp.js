import { SafeAreaView, View, Text, StyleSheet, Image, TextInput, Modal, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ReusableButton from '../components/ReusableButton';
import CheckBox from '@react-native-community/checkbox';


export default function SignUp() {
    const navigation = useNavigation();
    const [isChecked, setIsChecked] = useState(false);
    const [isPrivcyChecked, setIsPrivcyChecked] = useState(false);
    const [isLoading, setisLoading] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.subtitle}>Create your new account</Text>
            <Text style={styles.label1}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="example@email.com"
                placeholderTextColor="lightgray"
                keyboardType="email-address"
            />
            <Text style={styles.label2}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="password123"
                placeholderTextColor="lightgray"

            />
            <Text style={styles.label3}>Confirm Password</Text>
            <TextInput
                style={styles.input}
                placeholder="password123"
                placeholderTextColor="lightgray"

            />
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isChecked}
                    onValueChange={setIsChecked}
                />
                <Text style={{ top: 5, color: "#878787", fontWeight: '500' }}>
                    By sign up I agree with{' '}
                    <Text style={{ color: '#D11A38' }} onPress={() => {
                        setIsChecked((prevState) => !prevState);
                        navigation.navigate('TermsConditions')
                    }}>Terms and Conditions</Text>
                </Text>
            </View>
            <View style={styles.checkboxContainer1}>
                <CheckBox
                    value={isPrivcyChecked}
                    onValueChange={setIsPrivcyChecked}
                />
                <Text style={{ top: 5, color: '#878787',fontWeight: '500' }}>
                    By sign up I agree with{' '}
                    <Text style={{ color: '#D11A38' }} onPress={() => {
                        setIsPrivcyChecked((prevState) => !prevState);
                        navigation.navigate('PrivacyPolicy')
                    }}>Privacy and Policy</Text>
                </Text>
            </View>

            <ReusableButton text="Create New Account" onPress={()=>{setisLoading(true)
                setTimeout(() => { setisLoading(false);
                navigation.navigate('TermsConditions')
                }, 2000);
            }}/>

            <Text style={styles.ortext}>or</Text>
            <TouchableOpacity>
                <Text style={styles.btn1}>Google</Text>
            </TouchableOpacity>
            <View style={styles.footertext}>
                <Text style={{ color: '#878787', fontWeight: '400' }}>Already have an account?{' '}
                    <Text style={{ color: '#D11A38', fontSize: 16 }} onPress={() => navigation.navigate('SignIn')}>Sign In</Text>
                </Text>
            </View>
            <Modal
                visible={isLoading}
                transparent={true}
                animationType="fade">

                <View style={styles.modaloverlay}>
                    <View style={styles.modalcontent}>
                        <ActivityIndicator size="x-Large" color="#fff" />
                        <Text style={styles.loadertext}>creating your account</Text>
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
    logo: {
        alignSelf: 'center',
        marginTop: 20,
    },
    title: {
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 34,
        color: '#D11A38',
        fontWeight: '500',
    },
    subtitle: {
        alignSelf: 'center',
        fontSize: 14,
        color: '#878787',
        fontWeight: '400',
    },
    label1: {
        padding: 12,
        fontSize: 16,
        fontWeight: '400',
        left: 10,
        color: "#878787",
    },
    label2: {
        padding: 12,
        fontSize: 16,
        fontWeight: '500',
        left: 10,
        color: "#878787",
    },
    label3: {
        padding: 12,
        fontSize: 16,
        fontWeight: '500',
        left: 10,
        color: "#878787",
    },
    input: {
        padding: 15,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 12,
        margin: 12,
        marginTop: 0,
    },
    checkboxContainer: {
        flexDirection: 'row',
        top: 10,
        marginLeft: 10,
    },
    checkboxContainer1: {
        flexDirection: 'row',
        top: 10,
        marginLeft: 10,
    },
    ortext: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '400',
        color: 'gray',
    },
    btn1: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '400',
        borderColor: 'lightgray',
        borderWidth: 1,
        padding: 12,
        color: 'gray',
        borderRadius: 12,
        margin: 15,
        marginBottom: '1%',
    },
    footertext: {
        marginTop: 30,
        alignSelf: 'center',
    },
    modaloverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    modalcontent: {
        padding: 20,
        alignItems: 'center',
    },
    loadertext: {
        marginTop: 10,
        fontSize: 16,
        color: '#fff',
    },
})