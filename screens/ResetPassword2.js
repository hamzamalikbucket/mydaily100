import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ResetPassword2 = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('ResetPassword1')}>
                <Image source={require('../assets/images/frame30.png')} style={styles.frame30} />
            </TouchableOpacity>
            <Image source={require('../assets/images/frame31.png')} style={styles.frame31} />

            <Image source={require('../assets/images/frame35.png')} style={styles.frame35} />
            <Image source={require('../assets/images/frame34.png')} style={styles.frame34} />

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
    frame35: {
        marginTop: '10%',
        left: 15,
    },
    frame34: {
        alignSelf: 'center',
        marginTop: 15,
    },
})
export default ResetPassword2;