
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, SafeAreaView, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SuccessChart = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            {/* <ScrollView> */}
            <TouchableOpacity onPress={() => navigation.navigate('DailyTarget')}>
                <Text style={styles.text}>Skip</Text>
            </TouchableOpacity>
            <Image source={require('../assets/images/img2.png')} style={styles.image2} />
            <Text style={styles.line1}>Chart your</Text>
            <Text style={styles.line2}>Success Course</Text>
            <Text style={styles.discription}>Define goals, track progress, and</Text>
            <Text style={styles.discription}>thrive with My Daily 100. Your personal journey</Text>
            <Text style={styles.start}>Starts Here</Text>
            {/* <View style={styles.icons}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={32} color="#D11A38" />
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: '#D11A38', borderRadius: 28,}}onPress={() => navigation.navigate('DailyTarget')}>
                    <Icon name="arrow-forward" size={30} color="#fff" />
                </TouchableOpacity>
            </View> */}
            {/* </ScrollView> */}
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
    },
    image2: {
        alignSelf: 'center',
        width: 278,
        height: 287,
        marginTop: 70,
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
    // icons: {
    //     paddingHorizontal: 30,
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     position: 'absolute',
    //     bottom: 40,
    //     width: '100%',
    // },

});

export default SuccessChart;


