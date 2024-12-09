
import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';


const MainPage = () => {

    const navigation = useNavigation();
    return (
        <Swiper loop={false} showsPagination={false}>
            <View style={styles.container}>
                <Text style={styles.text}>Skip</Text>
                <Image source={require('../assets/images/img1.png')}
                    style={styles.image1} />
                <Text style={styles.line1}>Unlock your</Text>
                <Text style={styles.line2}>Potential Now</Text>
                <Text style={styles.discription}>Visualize and track daily progress,
                    turning obstacles into stepping stones with</Text>
                <Image source={require('../assets/images/logo.png')} style={styles.logo} />
                <TouchableOpacity onPress={() => navigation.navigate('SuccessChart')}>
                    <Image source={require('../assets/images/frame2.png')} style={styles.frame2} />
                </TouchableOpacity>
            </View>
        </Swiper>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: "#fff"
    },
    text: {
        color: '#D11A38',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 50,
        justifyContent: 'flex-start',
    },
    image1: {
        alignSelf: 'center',
        marginTop: 100,
    },
    line1: {
        fontSize: 34,
        color: '#000',
        fontWeight: '400',
        textAlign: 'center',
        marginTop: 50,
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
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    logo: {
        alignSelf: 'center',
        marginTop: 5,
    },
    frame2: {
        marginTop: 80,
        marginRight: 10,
        alignSelf: 'flex-end',
    },
});

export default MainPage;