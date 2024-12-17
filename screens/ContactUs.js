import { Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import ReusableButton from '../components/ReusableButton';
import { useNavigation } from '@react-navigation/native';

const ContactUs = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image source={require('../assets/images/frame30.png')} style={styles.frame30} />
            </TouchableOpacity>

            <Text style={styles.label1}>Contact Us</Text>
            <Text style={styles.label2}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder='example@example.com'
                placeholderTextColor="lightgray"
            />
            <Text style={styles.label3}>Message</Text>
            <TextInput
                style={styles.input1}
                placeholder='Tell to us here...'
                placeholderTextColor="lightgray"
                multiline={true}

            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.btntext}>Attach file</Text>
            </TouchableOpacity>
            <ReusableButton text="Submit" onPress={() => navigation.navigate('SelectCoach')} />
            <Image source={require('../assets/images/frame52.png')} style={styles.frame52} />
        </SafeAreaView>
    )
}

export default ContactUs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    frame30: {
        marginTop: 30,
        left: 10,
    },
    label1: {
        color: '#D11A38',
        fontSize: 36,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 25,
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
    frame52: {
        alignSelf: 'center',
    },
    label2: {
        left: 12,
        fontSize: 16,
    },
    label3: {
        left: 12,
        fontSize: 16,

    },
    input: {
        borderWidth: 1,
        margin: 15,
        padding: 15,
        borderRadius: 12,
        borderColor: 'lightgray',
    },
    input1: {
        borderWidth: 1,
        margin: 15,
        borderRadius: 12,
        borderColor: 'lightgray',
        textAlignVertical: 'top',
    },
})