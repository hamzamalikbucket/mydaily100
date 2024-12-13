import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Contact = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/frame30.png')} style={{ marginTop: 25, left: 15, }} />
            <Text style={styles.text}>Contact</Text>

            <View style={styles.box1}>
                <Text  style={styles.querytext}>Have a Query?</Text>
                <TouchableOpacity>
                <Image source={require('../assets/images/frame64.png')}/>
                </TouchableOpacity>
                <Text style={styles.text1}>Contact Us</Text>
            </View>
            <View style={styles.box2}>
                <Text  style={styles.querytext}>Need a Coach?</Text>
                <TouchableOpacity>
                <Image source={require('../assets/images/frame65.png')}/>
                </TouchableOpacity>
                <Text style={styles.text2}>Request a Coach</Text>
            </View>
        </View>
    )
}

export default Contact;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 36,
        fontWeight: '600',
        textAlign: 'center',
        color: '#D11A38',
        marginTop: 25,
    },
    querytext:{
        marginTop: 25,
        fontSize: 18,
        fontWeight: '500',
    },
    box1: {
        backgroundColor: "#FFE6E6", 
        borderRadius: 12,
        margin: 15,
        padding: 20,
        alignItems: "center",
        elevation: 5,
    },
    text1:{
        fontSize: 36,
        fontWeight: '400',
        textAlign: 'center',
        color: '#D11A38',
    },
    box2:{
        backgroundColor: "#FFE6E6", 
        borderRadius: 12,
        margin: 15,
        padding: 20,
        alignItems: "center",
        elevation: 5,
    },
    text2:{
        fontSize: 36,
        fontWeight: '400',
        textAlign: 'center',
        color: '#D11A38',
    },
})