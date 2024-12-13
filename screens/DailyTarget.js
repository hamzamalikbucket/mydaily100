
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';
useNavigation

const DailyTarget = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Goals')}>
                <Text style={styles.text}>Skip</Text>
            </TouchableOpacity>

            <Image source={require('../assets/images/img3.png')} style={styles.image3} />
            <Text style={styles.line1}>Stay on</Text>
            <Text style={styles.line2}>Target Daily</Text>
            <Text style={styles.discription}>Maintain focus, adapt, and conquer
                daily challenges. My Daily 100: Your
                guide to <Text style={styles.progress}>Unstoppable Progress</Text>
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Goals')}>
                <Image source={require('../assets/images/frame2.png')} style={styles.frame2} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../assets/images/frame3.png')} style={styles.frame3} />
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
        position: 'relative',
    },
    text: {
        color: '#D11A38',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: '15%',
    },
    image3: {
        alignSelf: 'center',
        marginTop: '20%',
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
    progress: {
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

export default DailyTarget;