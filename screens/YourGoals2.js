import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const YourGoals2 = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.groupitems}>
                <Image source={require('../assets/images/frame30.png')} style={styles.frame30} />
                <Image source={require('../assets/images/frame61.png')}/>
            </View>
            <Text style={styles.text}>You Have 20 Completed</Text>
            <Image source={require('../assets/images/frame62.png')} style={styles.frame62} />
        </View>
    )
}

export default YourGoals2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    groupitems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
        marginTop: 25,
    },
    text:{
        color: '#D11A38',
        fontSize: 36,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 25,
    },
    frame62:{
        marginTop: 25,
    },
})