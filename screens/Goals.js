
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Goals = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            {/* <ScrollView > */}
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.text}>Skip</Text>
                </TouchableOpacity>
                <Image source={require('../assets/images/img4.png')} style={styles.image4} />
                <Text style={styles.line1}>Achieve Your Goals</Text>
                <Text style={styles.line2}>Reach your Dreams</Text>
                <Text style={styles.discription}>Turn aspirations into reality,
                    one daily goal at a time. My Daily 100:
                    <Text style={styles.Companion}>Your Success Companion</Text></Text>
                <View style={styles.icons}>
                    <TouchableOpacity onPress={() => navigation.navigate('DailyTarget')}>
                        <Icon name="arrow-back" size={32} color="#D11A38" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <Icon name="arrow-forward" size={32} color="#fff"
                            style={styles.iconStyle} />
                    </TouchableOpacity>
                </View>
            {/* </ScrollView> */}
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
    image4: {
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
    Companion: {
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

export default Goals;