import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ReusableButton from '../components/ReusableButton';

const ForgetPassword = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/frame27.png')} style={styles.frame27} />
            <Text style={styles.title}>Forget Password</Text>
            <Text style={styles.subtitle}>We send you the link to @ex****@gmail.com{"\n"} please check and click it to reset password</Text>
           <ReusableButton text="Resend the Link" onPress={()=>navigation.navigate('ResetPassword1')}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    frame27: {
        alignSelf: 'center',
        marginTop: 289,
    },
    frame29: {
        alignSelf: 'center',
        marginTop: 20,
    },
    title: {
        textAlign: 'center',
        color: '#D11A38',
        fontSize: 36,
        fontWeight: '500',
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 14,
        color: '#878787',
        fontWeight: '300',
    },
})
export default ForgetPassword;