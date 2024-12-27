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
            <Text style={styles.label1}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="example@email.com"
                keyboardType="email-address"
            // value={email}
            // onChangeText={setEmail}
            />
            <Text style={styles.label1}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="password123"
            // value={password}
            // onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
                <Text style={styles.forgetpassword}>Forget Password</Text>
            </TouchableOpacity>

            <ReusableButton text="Login" onPress={() => { setisLoading(true)
                setTimeout(() => { setisLoading(false);
                navigation.navigate('OtpPage')
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
                <Text>Don't have an account?{' '}
                    <Text style={{ color: '#D11A38' }} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
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
        textAlign: 'center',
        color: '#D11A38',
        fontSize: 36,
        fontWeight: '600',
        marginTop: 35,
    },
    line2: {
        textAlign: 'center',
        fontWeight: '400',
        fontSize: 16,
    },
    footertext: {
        marginTop: 20,
        alignSelf: 'center',
    },
    input: {
        padding: 15,
        borderWidth: 1,
        borderColor: 'lightgray',
        marginLeft: 15,
        marginRight: 15,
    },
    label1: {
        marginTop: 20,
        padding: 12,
        fontSize: 16,
        color: "#000",
    },
    forgetpassword: {
        textAlign: 'right',
        padding: 12,
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
        marginBottom: '1%',
    },
    btn2: {
        textAlign: 'center',
        fontSize: 20,
        borderColor: 'lightgray',
        borderWidth: 1,
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