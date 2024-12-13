import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import ReusableButton from '../components/ReusableButton';
import { useNavigation } from '@react-navigation/native';


const ChangePassword = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/frame30.png')} style={styles.frame30} />
            <Text style={styles.textpassword}>Change Password</Text>
            <Text style={styles.label1}>current password</Text>
            <TextInput
                style={styles.input}
                placeholder='current password'
            />
            <Text style={styles.label2}>New password</Text>
            <TextInput
                style={styles.input}
                placeholder='New password'
            />
            <Text style={styles.label3}>Confirm New password</Text>
            <TextInput
                style={styles.input}
                placeholder='Confirm New password'
            />

            <ReusableButton text='Save New Password' onPress={() => navigation.navigate('ForgetPassword')} />
            <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
                <Text style={styles.label}>Forget Password</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ChangePassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    frame30: {
        marginTop: 35,
        left: 10,
    },
    textpassword: {
        color: '#D11A38',
        fontSize: 38,
        fontWeight: '600',
        marginTop: 45,
        left: 15,
    },
    label: {
        textAlign: 'center',
        color: '#D11A38',
        fontSize: 16,
    },
    label1: {
        marginTop: '12%',
        left: 12,
        fontSize: 16,
    },
    label2: {
        left: 12,
        fontSize: 16,
    },
    label3: {
        left: 12,
        fontSize: 16,
    },
    input:{
        borderWidth: 1,
        margin: 15,
        padding:15,
        borderRadius: 12,
        borderColor: 'lightgray',
    },
})