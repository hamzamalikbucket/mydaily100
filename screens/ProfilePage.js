import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ReusableButton from '../components/ReusableButton'


const ProfilePage = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/frame30.png')} style={styles.frame30} />
            <Image source={require('../assets/images/frame37.png')} style={styles.frame37} />
            <Image source={require('../assets/images/frame38.png')} style={styles.frame38} />
            <Image source={require('../assets/images/frame39.png')} style={styles.frame39} />
            <Image source={require('../assets/images/frame40.png')} style={styles.frame40} />
           <ReusableButton text = 'Add Motivation' onPress={()=>navigation.navigate('Motivation')}/> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    frame30: {
        marginTop: 15,
        left: 10,
    },
    frame37: {
        alignSelf: 'center',
        marginTop: 30,
    },
    frame38: {
        alignSelf: 'center',
        marginTop: '25%',
        position: 'absolute',
    },
    frame39: {
        alignSelf: 'center',
        marginTop: '15%',
    },
    frame40: {
        marginTop: '20%',
    },
 
})
export default ProfilePage;