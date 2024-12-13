import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ReusableButton from '../components/ReusableButton';


const ResetPassword2 = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../assets/images/frame30.png')} style={styles.frame30} />
            </TouchableOpacity>
            <Text style={styles.label1}>Reset Password</Text>
            <Text style={styles.inputlabel}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder='New Password'
            />
            <Text style={styles.inputlabel}>Confirm New Password</Text>
            <TextInput
                style={styles.input}
                placeholder='New Password'
            />
            <Text style={{marginLeft: 20, marginTop: 10,}}>*Please make sure the Password match </Text>
            <ReusableButton text="Save New Password" onPress={() => navigation.navigate('ContactUs')} />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    frame30: {
        marginTop: 35,
        left: 10,
    },
    label1: {
        marginTop: '15%',
        left: 15,
        color: '#D11A38',
        fontSize: 36,
        fontWeight: '600',
    },
    input: {
        padding: 15,
        borderWidth: 1,
        borderColor: 'lightgray',
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 12,
    },
    inputlabel: {
        marginTop: 35,
        padding: 12,
        fontSize: 16,
        color: "#000",
    },
})
export default ResetPassword2;