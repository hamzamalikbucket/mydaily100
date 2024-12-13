import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Setting = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('Setup')}>
                <Image source={require('../assets/images/frame30.png')} style={styles.frame30} />
            </TouchableOpacity>
            <Text style={styles.label}>Settings</Text>
            <Image source={require('../assets/images/frame41.png')} style={styles.frame41} />
            <Text style={styles.label2}>Edit profile</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
                <Image source={require('../assets/images/frame44.png')} style={styles.frame44} />
            </TouchableOpacity>
            <Image source={require('../assets/images/frame47.png')} style={styles.frame47} />
            <Image source={require('../assets/images/frame49.png')} style={styles.frame49} />
        </View>
    )
}

export default Setting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    frame30: {
        marginTop: 35,
        left: 10,
    },
    label: {
        textAlign: 'center',
        color: '#D11A38',
        fontSize: 32,
        fontWeight: '600',
        marginTop: '10%',
    },
    frame41: {
        alignSelf: 'center',
        position: 'absolute',
        marginTop: '40%',
    },
    label2: {
        textAlign: 'center',
        fontSize: 17,
        marginTop: '33%',
        fontWeight: '600',
    },
    frame44: {
        margin: 20,
        alignSelf: 'center',
    },
    frame47: {
        margin: 20,
        alignSelf: 'center',

    },
    frame49: {
        margin: 20,
        alignSelf: 'center',
    },
})
