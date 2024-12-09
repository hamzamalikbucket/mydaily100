import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ReusableButton from '../components/ReusableButton'
import { useNavigation } from '@react-navigation/native'


const ChangePassword = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/frame30.png')} style={styles.frame30} />
            <Text style={styles.textpassword}>Change Password</Text>
            <Image source={require('../assets/images/frame50.png')} style={styles.frame50} />
            <Image source={require('../assets/images/frame32.png')} />
            <Image source={require('../assets/images/frame33.png')} />
            <ReusableButton text='Save New Password' onPress={() => navigation.navigate('Setting')} />
                <TouchableOpacity onPress={()=>navigation.navigate('ForgetPassword')}>
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
    frame50: {
        marginTop: '12%',
    },
    label:{
        textAlign: 'center',
        color: '#D11A38',
        fontSize: 16,
    },
})