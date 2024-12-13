import {  View, StyleSheet,Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ReusableButton from '../components/ReusableButton';

const PrivacyPolicy = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.base}>
                <Text style={{ color: '#D11A38', fontSize: 36, fontWeight: '600', }}>PrivacyPolicy</Text>
                <Text style={{textAlign: 'justify', margin: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla, urna eu tincidunt
                congue, nisl nunc egestas dui, vel semper dui metus eu enim.Nullam laoreet libero ac feugiat
                cursus. Mauris malesuada augue in metus aliquet, at auctor metusconsectetur. Curabitur eget mi
                vel felis euismod mollis.Lorem ipsum dolor sit amet, consecteturadipiscing elit. Nam fringilla, urna eu tincidunt
                congue, nisl nunc egestas dui, vel semper dui metus eu enim.Nullam laoreet libero ac feugiat
                cursus. Mauris malesuada augue in metus aliquet, at auctor metusconsectetur. Curabitur eget mi
                vel felis euismod mollis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla, urna eu tincidunt
                congue, nisl nunc egestas dui, vel semper dui metus eu enim.Nullam laoreet libero ac feugiat
                cursus. Mauris malesuada augue in metus aliquet, at auctor metusconsectetur. Curabitur eget mi
                vel felis euismod mollis.Lorem ipsum dolor sit amet, consecteturadipiscing elit. Nam fringilla, urna eu tincidunt
                congue, nisl nunc egestas dui, vel semper dui metus eu enim.Nullam laoreet libero ac feugiat
                cursus. Mauris malesuada augue in metus aliquet, at auctor metusconsectetur. Curabitur eget mi
                vel felis euismod mollis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla, urna eu tincidunt
                congue, nisl nunc egestas dui,Lorem ipsum dolor sit amet.Curabitur eget mi
                vel felis euismod mollis.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet ,</Text>
                <ReusableButton text="Agree" onPress={()=>navigation.navigate('OtpPage')}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    base: {
        margin: '10%',
        height: '80%',
        backgroundColor: '#FFE5E9',
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#D11A38',
    },

})

export default PrivacyPolicy;