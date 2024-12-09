import { View,Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ReusableButton from '../components/ReusableButton';

const Motivation = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}>
                <Image source={require('../assets/images/frame30.png')} style={styles.frame30} />
            </TouchableOpacity>
            <Image source={require('../assets/images/frame42.png')} style={styles.frame42} />
            <Image source={require('../assets/images/frame43.png')} style={styles.frame43} />
            <ReusableButton text = 'upload your dreams' onPress={() => navigation.navigate('PicUpload')} />

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
        left: 10,
    },
    frame42: {
        alignSelf: 'center',
        marginTop: 25,
    },
    frame43: {
        alignSelf: 'center',
        marginTop: 25,
    },
})
export default Motivation;