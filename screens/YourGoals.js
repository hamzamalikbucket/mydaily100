import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const YourGoals = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/frame57.png')} style={styles.frame57} />
            <Text style={styles.text}>Your Goals</Text>
            <Image source={require('../assets/images/frame58.png')} style={styles.frame58} />
            <Image source={require('../assets/images/frame59.png')} style={styles.frame59} />
            <Image source={require('../assets/images/frame60.png')} style={styles.frame60} />
            <TouchableOpacity onPress={()=>navigation.navigate('')}>
                <Image source={require('../assets/images/frame2.png')} style={styles.frame2} />
            </TouchableOpacity>

        </View>
    )
}

export default YourGoals;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    frame57: {
        alignSelf: 'center',
        marginTop: 15,
        width: '90%',
    },
    text: {
        fontSize: 36,
        fontWeight: '600',
        color: '#D11A38',
        left: 25,
        marginTop: 20,
    },
    frame58: {
        alignSelf: 'center',
        marginTop: 25,
        width: '100%',
    },
    frame59: {
        marginTop: 25,
        width: '95%',
    },
    frame60: {
        marginTop: 20,
        width: '95%',
    },
    frame2: {
        alignSelf: 'flex-end',
        width: 40,
        height: 40,
        right: 15,
        Bottom: 15,
    }
})