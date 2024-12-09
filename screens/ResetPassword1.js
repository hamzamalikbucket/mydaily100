import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ResetPassword1 = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('ForgetPassword')}>
                <Image source={require('../assets/images/frame30.png')} style={styles.frame30} />
            </TouchableOpacity>

            <Image source={require('../assets/images/frame31.png')} style={styles.frame31} />
            <Image source={require('../assets/images/frame32.png')} style={styles.frame32} />
            <Image source={require('../assets/images/frame33.png')} style={styles.frame33} />

            <TouchableOpacity onPress={() => navigation.navigate('ResetPassword2')}>
                <Image source={require('../assets/images/frame34.png')} style={styles.frame34} />
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    frame30: {
        marginTop: 20,
    },
    frame31: {
        marginTop: '15%',
        left: 15,
    },
    frame32: {
        marginTop: '10%',
        left: 10,
    },
    frame33: {
        left: 10,
    },
    frame34: {
        alignSelf: 'center',
    },
})

export default ResetPassword1;