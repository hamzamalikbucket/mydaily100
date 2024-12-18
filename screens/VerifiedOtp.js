import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const VerifiedOtp = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <View style={styles.icon}>
                <Icon name='chevron-left' size={26} color='gray' />
                <Text style={styles.icontext}>Back</Text>
            </View>
            </TouchableOpacity>
            <Image source={require('../assets/images/frame16.png')} style={styles.frame16} />
            <Text style={styles.Text1}>Successfully Verified</Text>
            <Text style={styles.Text2}>Your account is set now, we will redirect you to profile information</Text>
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
        marginTop: 150,
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
        left: 10,
        marginTop: 500,
    },
    icon: {
        marginTop: 15,
        left: 12,
        flexDirection: 'row',
    },
    icontext: {
        fontSize: 20,
        fontWeight: '400',
    },
})
export default VerifiedOtp;