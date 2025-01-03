
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const SuccessChart = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('DailyTarget')}>
                <Text style={styles.text}>Skip</Text>
            </TouchableOpacity>
            <Image source={require('../assets/images/img2.png')} style={styles.image2} />
            <Text style={styles.line1}>Chart your</Text>
            <Text style={styles.line2}>Success Course</Text>
            <Text style={styles.discription}>Define goals, track progress, and</Text>
            <Text style={styles.discription}>thrive with My Daily 100. Your personal journey</Text>
            <Text style={styles.start}>Starts Here</Text>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    text: {
        color: '#D11A38',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
        top: 20,
    },
    image2: {
        alignSelf: 'center',
        width: 278,
        height: 287,
        marginTop: 80,
    },
    line1: {
        fontSize: 34,
        color: '#000',
        fontWeight: '400',
        textAlign: 'center',
    },
    line2: {
        fontSize: 34,
        fontWeight: '500',
        color: '#D11A38',
        textAlign: 'center',
    },
    discription: {
        fontSize: 15,
        fontWeight: '400',
        textAlign: 'center',
        color: '#878787',
    },
    start: {
        color: '#D11A38',
        textAlign: 'center',
    },
});

export default SuccessChart;


