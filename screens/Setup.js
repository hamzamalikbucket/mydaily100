import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Setup = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('ProfilePage')}>
            <Image source={require('../assets/images/frame30.png')} style={styles.frame30} />
            </TouchableOpacity>
            <Image source={require('../assets/images/frame48.png')} style={styles.frame48} />
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
        left: 15,
    },
    frame48: {
        alignSelf: 'center',
        marginTop: '50%',
    },
})
export default Setup;