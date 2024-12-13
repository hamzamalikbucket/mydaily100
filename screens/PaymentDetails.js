import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ReusableButton from '../components/ReusableButton';
const PaymentDetails = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../assets/images/frame30.png')} style={styles.frame30} />
            </TouchableOpacity>
            <Text style={styles.line1}>Enter Payment Details</Text>
            <Text style={styles.label1}>Card Number</Text>
            <TextInput
                style={styles.input}
                placeholder='1234-5678-9101-1121'
                placeholderTextColor="lightgray"
            />
            <View style={styles.group}>
                <View style={styles.inputContainer}>
                    <Text>Expire Date</Text>
                    <TextInput
                        style={styles.input1}
                        placeholder="12/34"
                        placeholderTextColor="lightgray"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text>CVV</Text>
                    <TextInput
                        style={styles.input1}
                        placeholder="123"
                        placeholderTextColor="#aaa"
                    />
                </View>
            </View>
            <Text style={styles.text}>Save card details</Text>
            <View style={styles.amountcontainer}>
            <Text >$26</Text>
            <Text style={styles.textbtn}>Pay & confirm</Text>
            </View>
        </View>
    )
}

export default PaymentDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    frame30: {
        marginTop: 35,
        left: 15,
    },
    line1: {
        color: '#D11A38',
        fontSize: 36,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 20,
    },
    label1: {
        marginTop: 30,
        left: 15,
        fontSize: 16,
    },
    input: {
        padding: 15,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 12,
        margin: 12,
    },
    text: {
        marginTop: '10%',
        marginLeft: 15,
        fontSize: 16,
    },
    text2: {
        fontSize: 28,
        marginLeft: 15,
        fontWeight: 'bold',
    },
    textbtn: {
        fontSize: 28,
        backgroundColor: '#D11A38',
        width: '50%',
        height: '25%',
        textAlign: 'center',
        padding: 13,
        color: '#fff',
        borderRadius: 12,
        fontWeight: '400',
    },
    amountcontainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '20%',
    },
    group: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
    },
    inputContainer: {
        flex: 1, 
        marginLeft: 15,
        marginRight: 10,
        marginTop: 25,
    },
    input1: {
        borderWidth: 1, 
        borderColor: 'lightgray', 
        padding: 8,
        borderRadius: 12,
        marginTop: 5, 
    },
})