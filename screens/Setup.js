import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Setup = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.group}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/images/frame30.png')} style={styles.frame30} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                    <Text style={styles.textbtn} onPress={() => navigation.navigate('Setting')}>Next</Text>
                </TouchableOpacity>
            </View>
            <Image source={require('../assets/images/frame16.png')} style={styles.frame16} />
            <Text style={styles.text}>Successfully Set Up</Text>
            <Text style={styles.subtitle}>Congratulations! your profile{"\n"} account was set</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        alignSelf: 'center',
        color: '#D11A38',
        fontSize: 36,
        fontWeight: '600',
    },
    frame16: {
        alignSelf: 'center',
        marginTop: '50%',
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 16,
    },
    group: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
    },
    textbtn: {
        marginRight: 15,
        fontSize: 18,
    },
})
export default Setup;