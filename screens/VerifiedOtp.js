import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const VerifiedOtp = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/frame16.png')} style={styles.frame16} />
            <Text style={styles.Text1}>Successfully Verified</Text>
            <Text style={styles.Text2}>Your account is set now, we will redirect you to
                profile information</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Image source={require('../assets/images/frame3.png')} style={styles.frame3} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    frame16: {
        alignSelf: 'center',
        marginTop: '50%',
    },
    Text1: {
        color: '#D11A38',
        textAlign: 'center',
        marginTop: 15,
        fontSize: 34,
        fontWeight: '600',
    },
    Text2: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '400',
        margin: 15,
        marginTop: 0,
    },
    frame3: {
        position: 'absolute',
        left: 10,
        marginTop: '80%',

    },
})
export default VerifiedOtp;