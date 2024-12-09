import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const PrivacyPolicy = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/frame26.png')} style={styles.frame26} />
            <Image source={require('../assets/images/frame24.png')} style={styles.frame24} />
            <TouchableOpacity onPress={() => navigation.navigate('OtpPage')}>
                <Image source={require('../assets/images/frame25.png')} style={styles.frame25} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    frame26: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: '20%',
        height: '83%',
    },
    frame24: {
        alignSelf: 'center',
        marginTop: '23%',
    },
    frame25: {
        alignSelf: 'center',
        marginTop: 15,
    },
})

export default PrivacyPolicy;