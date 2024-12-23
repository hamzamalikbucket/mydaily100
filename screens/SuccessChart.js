
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
                <Text style={styles.discription}>Define goals, track progress, and
                    thrive with My Daily 100. Your personal
                    journey <Text style={styles.start}>Starts Here</Text>
                </Text>
                <View style={styles.icons}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Icon name="arrow-back" size={32} color="#D11A38" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('DailyTarget')}>
                        <Icon name="arrow-forward" size={32} color="#fff"
                            style={styles.iconStyle} />
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
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
        marginTop: 30,
    },
    image2: {
        alignSelf: 'center',
        width: 298,
        height: 293,
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
        fontSize: 15,
        fontWeight: '400',
        textAlign: 'center',
        marginTop: '5%',
    },
    start: {
        color: '#D11A38',
    },
    icons: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 160,
    },
    iconStyle: {
        backgroundColor: "#D11A38",
        width: 50,
        height: 50,
        borderRadius: 25,
        padding: 8,
    },
});

export default SuccessChart;