import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ReusableButton from '../components/ReusableButton';

const PicUpload = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('Motivation')}>
            <Image source={require('../assets/images/frame30.png')} style={styles.frame30} />
            </TouchableOpacity>
            <Image source={require('../assets/images/frame45.png')} style={styles.frame45} />
            <Image source={require('../assets/images/frame46.png')} style={styles.frame46} />
            <ReusableButton text = 'save' onPress={()=>navigation.navigate('Setup')}/>
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
    frame45: {
        alignSelf: 'center',
        marginTop: 20,
    },
    frame46: {
        alignSelf: 'center',
        marginTop: 15,
    },

})

export default PicUpload;