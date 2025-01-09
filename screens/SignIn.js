import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, SafeAreaView, Text, TouchableOpacity, Modal, TextInput, ActivityIndicator } from 'react-native';
import ReusableButton from "../components/ReusableButton";


const SignIn = () => {
    const navigation = useNavigation();
    const [isLoading, setisLoading] = useState(false);

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const saveCredentials = async () => {
    //     try {
    //         if (!email || !password) {
    //             Alert.alert(`Feilds can not be empty.`)
    //             return;
    //         }
    //         await AsyncStorage.setItem(`useremail`, email);
    //         await AsyncStorage.setItem(`userpassword`, password);
    //         Alert.alert(`Credentials saved succefully.`);
    //     } catch (error) {
    //         Alert.alert(`Failed to save data`);
    //     }
    // };

    // const loadCredentials = async () => {
    //     try {
    //         const savedEmail = await AsyncStorage.getItem(`useremail`);
    //         const savedPassword = await AsyncStorage.getItem(`userpassword`);
    //         if (savedEmail) setEmail(savedEmail);
    //         if (savedPassword) setPassword(savedPassword);

    //     } catch (error) {
    //         Alert.alert(`Failed to load data`);
    //     }
    // };
    // useEffect(() => {
    //     loadCredentials();
    // }, []);

    // const [isLoading, setisLoading] = useState(false);
    // const handleLogin = () => {
    //     if(isLoading) return;
    //     setisLoading(true);
    //     setTimeout(() => {
    //         setisLoading(false);
    //         navigation.navigate('OtpPage')
    //     }, 2000);
    // };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.line1}>Welcome Back</Text>
            <Text style={styles.line2}>Sign in to continue</Text>
            <View style={styles.inputData}>
                <Text style={styles.label1}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="example@email.com"
                    placeholderTextColor="#878787"
                    keyboardType="email-address"
                // value={email}
                // onChangeText={setEmail}
                />
                <Text style={styles.label2}>Password</Text>
                <TextInput
                    style={styles.input1}
                    placeholder="password123"
                    placeholderTextColor="#878787"

                // value={password}
                // onChangeText={setPassword}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
                <Text style={styles.forgetpassword}>Forget Password</Text>
            </TouchableOpacity>

            <ReusableButton text="Login" onPress={() => {
                setisLoading(true)
                setTimeout(() => {
                    setisLoading(false);
                    navigation.navigate('MyDrawer')
                }, 2000);
            }} />

            <Text style={styles.ortext}>or</Text>
            <TouchableOpacity>
                <Text style={styles.btn1}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.btn2}>Apple</Text>
            </TouchableOpacity>
            <View style={styles.footertext}>
                <Text style={{ color: '#878787', fontWeight: '400' }}>Don't have an account?{' '}
                    <Text style={{ color: '#D11A38', fontSize: 16 }} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
                </Text>
            </View>
            <Modal
                visible={isLoading}
                transparent={true}
                animationType="fade">

                <View style={styles.modaloverlay}>
                    <View style={styles.modalcontent}>
                        <ActivityIndicator size="x-Large" color="#fff" />
                        <Text style={styles.loadertext}>logging in</Text>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    line1: {
        color: '#D11A38',
        fontSize: 34,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 30,
    },
    line2: {
        fontWeight: '500',
        fontSize: 16,
        color: '#878787',
    
        textAlign: 'center',
    },
    footertext: {
        marginTop: 20,
        alignSelf: 'center',
    },
    inputData: {
        marginTop: 25,
    },
    input: {
        padding: 15,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 12,
        margin: 12,
    },
    input1: {
        padding: 15,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 12,
        margin: 12,
    },
    label1: {
        padding: 12,
        fontSize: 16,
        fontWeight: '500',
        left: 10,
        color: "#000",
    },
    label2: {
        padding: 12,
        fontSize: 16,
        fontWeight: '500',
        left: 10,
        color: "#000",
    },
    forgetpassword: {
        textAlign: 'right',
        color: 'gray',
        fontSize: 15,
        fontWeight: '400',
        padding: 8,
        right: 12,
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
    btn2: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '400',
        borderColor: 'lightgray',
        borderWidth: 1,
        color: 'gray',
        padding: 12,
        borderRadius: 12,
        margin: 15,
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

export default SignIn;