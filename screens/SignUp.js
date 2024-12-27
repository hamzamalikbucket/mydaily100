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
                keyboardType="email-address"
            />
            <Text style={styles.label1}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="password123"
            />
            <Text style={styles.label1}>Confirm Password</Text>
            <TextInput
                style={styles.input}
                placeholder="password123"
            />
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isChecked}
                    onValueChange={setIsChecked}
                />
                <Text style={{ top: 5 }}>
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
                <Text style={{ top: 5 }}>
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
                <Text>Already have an account?{' '}
                    <Text style={{ color: '#D11A38' }} onPress={() => navigation.navigate('SignIn')}>Sign In</Text>
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
        marginTop: 10,
    },
    title: {
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 36,
        color: '#D11A38',
        fontWeight: '600',
    },
    subtitle: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '400',
    },
    label1: {
        marginTop: 15,
        fontSize: 16,
        color: "#000",
        marginLeft: 15,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: 'lightgray',
        marginLeft: 15,
        marginRight: 15,
        padding: 10,
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
    },
    btn1: {
        textAlign: 'center',
        fontSize: 20,
        borderColor: 'lightgray',
        borderWidth: 1,
        padding: 12,
        borderRadius: 12,
        margin: 15,
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