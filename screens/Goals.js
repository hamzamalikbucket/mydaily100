
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
                {'\n'}one daily goal at a time. My Daily 100:
                {'\n'}<Text style={styles.Companion}>Your Success Companion</Text></Text>
            <View style={styles.icons}>
                <TouchableOpacity style={{position:'absolute', left:15, width: 56, top: 10, height: 56, borderRadius: 25, padding: 11}} onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={32} color="#D11A38"/>
                </TouchableOpacity>
                <TouchableOpacity style={{ position: 'absolute', right: 15, backgroundColor: '#D11A38', width: 58, height: 58, borderRadius: 28, top: 12, padding: 12 }} onPress={() => navigation.navigate('SignIn')}>
                    <Icon name="arrow-forward" size={32} color="#fff" />
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
        color: '#878787',
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

});

export default Goals;