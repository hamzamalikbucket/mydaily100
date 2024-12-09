import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import ReusableButton from '../components/ReusableButton'

const ContactUs = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/frame30.png')} style={styles.frame30} />
            <Text style={styles.label1}>Contact Us</Text>
            <Image source={require('../assets/images/frame5.png')} style={styles.frame5} />
            <Image source={require('../assets/images/frame51.png')} />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btntext}>Attach file</Text>
            </TouchableOpacity>
            <ReusableButton text= "Submit"/>
            <Image source={require('../assets/images/frame52.png')} style={styles.frame52}/>
        </View>
    )
}

export default ContactUs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    frame30: {
        marginTop: 35,
        left: 10,
    },
    label1: {
        color: '#D11A38',
        fontSize: 36,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: '10%',
    },
    frame5: {
        marginTop: 35,
    },
    button: {
        borderWidth: 2,
        borderColor: '#D11A38',
        padding: 12,
        margin: 20,
        borderRadius: 12,
    },
    btntext: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
    },
    frame52:{
        alignSelf: 'center',
    },
})