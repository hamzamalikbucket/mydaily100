import { SafeAreaView,View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ReusableButton from '../components/ReusableButton';

export default function SignUp() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.subtitle}>Create your new account</Text>
            <Text style={styles.label1}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="example@email.com"
                // value={email}
                // onChangeText={setEmail}
                keyboardType="email-address"
            />
            <Text style={styles.label1}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="password123"
            // value={password}
            />
            <Text style={styles.label1}>Confirm Password</Text>
            <TextInput
                style={styles.input}
                placeholder="password123"
            // value={password}
            />
            <Text style={styles.option1}>
                By sign up I agree with{' '}
                <Text style={{ color: '#D11A38' }} onPress={() => navigation.navigate('TermsConditions')}>Terms and Conditions</Text>
            </Text>
            <Text style={styles.option2}>
                By sign up I agree with{' '}
                <Text style={{ color: '#D11A38' }} onPress={() => navigation.navigate('PrivacyPolicy')}>Privacy and Policy</Text>
            </Text>

            <ReusableButton text="Create New Account" onPress={() => navigation.navigate('ProfilePage')} />
            <Text style={styles.ortext}>or</Text>
            <TouchableOpacity>
                <Text style={styles.btn1}>Google</Text>
            </TouchableOpacity>
            <View style={styles.footertext}>
                <Text>Already have an account?{' '}
                    <Text style={{ color: '#D11A38' }} onPress={() => navigation.navigate('SignIn')}>Sign In</Text>
                </Text>
            </View>
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
        marginLeft: 12,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: 'lightgray',
        marginLeft: 15,
        marginRight: 15,
    },
    option1: {
        marginTop: 12,
        marginLeft: 20,
    },
    option2: {
        marginTop: 12,
        marginLeft: 20,
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
})