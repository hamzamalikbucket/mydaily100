import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const PaymentDetails = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image source={require('../assets/images/frame30.png')} style={styles.frame30} />
            </TouchableOpacity>
            <Text style={styles.line1}>Enter Payment Details </Text>
            <Text style={styles.label1}>Card Number</Text>
            <TextInput
                style={styles.input}
                placeholder='1234-5678-9101-1121'
                placeholderTextColor="lightgray"
            />
            <Text style={styles.label2}>Expire Date</Text>
            <TextInput
                style={styles.input1}
                placeholder='12/34'
                placeholderTextColor="lightgray"
            />
            <View style={styles.group}>
                <Text style={styles.label3}>CVV</Text>
                <TextInput
                    style={styles.input2}
                    placeholder="123"
                    placeholderTextColor="#aaa"
                />
            </View>
            <Image source={require('../assets/images/frame54.png')} style={styles.frame54} />
            <TouchableOpacity onPress={()=>navigation.navigate('YourGoals')}>
            <Image source={require('../assets/images/frame55.png')} style={styles.frame55} />
            </TouchableOpacity>

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
    label2: {
        left: 15,
        fontSize: 16,
        marginTop: 5,
    },
    input1: {
        padding: 15,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 12,
        margin: 12,
        width: '30%',
    },
    label3: {
        right: '25%',
        fontSize: 16,
        textAlign: 'right',
    },
    input2: {
        padding: 15,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 12,
        margin: 12,
        width: '30%',
        justifyContent: 'space-between',
        alignSelf: 'flex-end',
    },
    group: {
        marginTop: '-25%',
    },
    frame54: {
        marginTop: 10,
    },
    frame55: {
        marginTop: '82%',
        left: 10,
        width: '100%',
    },

})