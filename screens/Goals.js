
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

const Goals = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.text}>Skip</Text>
            </TouchableOpacity>

            <Image source={require('../assets/images/img4.png')} style={styles.image4} />
            <Text style={styles.line1}>Achieve Your Goals</Text>
            <Text style={styles.line2}>Reach your Dreams</Text>
            <Text style={styles.discription}>Turn aspirations into reality,
                one daily goal at a time. My Daily 100:
                <Text style={styles.Companion}>Your Success Companion</Text></Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
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
    image4: {
        alignSelf: 'center',
        marginTop: '25%',
    },
    line1: {
        fontSize: 34,
        color: '#000',
        fontWeight: '400',
        textAlign: 'center',
        marginTop: '10%',
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
        marginLeft: 10,
        marginRight: 10,
    },
    Companion: {
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

export default Goals;