import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const PaymentSuccessfull = () => {
    const navigation = useNavigation();
    return (
        <View styles={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('PaymentDetails2')}>
                <Image source={require('../assets/images/frame30.png')} style={styles.frame30} />
            </TouchableOpacity>

            <Image source={require('../assets/images/frame56.png')} style={styles.frame56} />
        </View>
    )
}

export default PaymentSuccessfull;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    frame30: {
        marginTop: 35,
        left: 15,
    },
    frame56: {
        alignSelf: 'center',
        marginTop: '50%',
    },
})