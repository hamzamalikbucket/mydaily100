
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

const SuccessChart = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('DailyTarget')}>
                <Text style={styles.text}>Skip</Text>
            </TouchableOpacity>
            <Image source={require('../assets/images/img2.png')} style={styles.image2} />
            <Text style={styles.line1}>Chart your</Text>
            <Text style={styles.line2}>Success Course</Text>
            <Text style={styles.discription}>Define goals, track progress, and
                thrive with My Daily 100. Your personal
                journey <Text style={styles.start}>Starts Here</Text>
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('DailyTarget')}>
                <Image source={require('../assets/images/frame2.png')} style={styles.frame2} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../assets/images/frame3.png')} style={styles.frame3} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    text: {
        color: '#D11A38',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: '10%',
    },
    image2: {
        alignSelf: 'center',
        marginTop: '25%',
    },
    line1: {
        fontSize: 34,
        color: '#000',
        fontWeight: '400',
        textAlign: 'center',
        marginTop: '15%',
    },
    line2: {
        fontSize: 34,
        fontWeight: '500',
        color: '#D11A38',
        textAlign: 'center',
    },
    discription: {
        fontSize: 17,
        fontWeight: '400',
        textAlign: 'center',
        marginTop: '5%',
    },
    start: {
        color: '#D11A38',
    },
    frame2: {
        marginTop: '25%',
        marginRight: 15,
        alignSelf: 'flex-end',
    },
    frame3: {
        position: 'absolute',
        left: 10,
        bottom: 5,
    },
});

export default SuccessChart;