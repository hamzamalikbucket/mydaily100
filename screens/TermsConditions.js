import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const TermsConditions = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/frame26.png')} style={styles.frame26} />
            <Image source={require('../assets/images/frame23.png')} style={styles.frame23} />

            <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')}>

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
    frame23: {
        alignSelf: 'center',
        marginTop: '23%',
    },
    frame25: {
        alignSelf: 'center',
        marginTop: 15,
    },
})

export default TermsConditions;