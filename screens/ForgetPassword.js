import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ForgetPassword = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/frame27.png')} style={styles.frame27} />
            <Image source={require('../assets/images/frame28.png')} style={styles.frame28} />
            <TouchableOpacity onPress={()=>navigation.navigate('ResetPassword1')}>
                <Image source={require('../assets/images/frame29.png')} style={styles.frame29} />
            </TouchableOpacity>

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
        marginTop: '70%',
    },
    frame28: {
        alignSelf: 'center',
        marginTop: 20,
    },
    frame29: {
        alignSelf: 'center',
        marginTop: 20,
    },
})
export default ForgetPassword;