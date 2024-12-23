
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MainPage = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('SuccessChart')}>
                <Text style={styles.text}>Skip</Text>
            </TouchableOpacity>
            <Image source={require('../assets/images/img1.png')}
                style={styles.image1} />
            <Text style={styles.line1}>Unlock your</Text>
            <Text style={styles.line2}>Potential Now</Text>
            <Text style={styles.discription}>Visualize and track daily progress,
                turning obstacles into stepping stones with</Text>
            <Image source={require('../assets/images/logo.png')} style={styles.logo} />
            <TouchableOpacity onPress={() => navigation.navigate('SuccessChart')}>
                <Icon name="arrow-forward" size={32} color="#fff"
                    style={styles.iconStyle} />
            </TouchableOpacity>
        </SafeAreaView>
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
        marginTop: 30,
    },
    image1: {
        alignSelf: 'center',
        marginTop: 50,
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
    },
    logo: {
        alignSelf: 'center',
        marginTop: '5%',
    },
    iconStyle: {
        backgroundColor: "#D11A38",
        width: 50,
        height: 50,
        borderRadius: 25,
        padding: 8,
        alignSelf: 'flex-end',
        marginTop: 100,
        right: 15,
    },
});

export default MainPage;