import { StyleSheet, SafeAreaView, ScrollView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckBox from '@react-native-community/checkbox';

const PaymentDetails = () => {
    const navigation = useNavigation();
    const [isChecked, setIsChecked] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', top: 15 }}>
                        <Icon name="chevron-left" size={26} color="gray" />
                        <TouchableOpacity>
                            <Text style={{ fontSize: 18 }}>Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.line1}>Enter Payment Details</Text>
                <Text style={styles.label1}>Card Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="1234-5678-9101-1121"
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
                        <View style={{flexDirection: 'row'}}>
                        <Text>CVV</Text>
                        <Icon name="help" size={15} style={{left: 5, top: 2}}/>
                        </View>
                        <TextInput
                            style={styles.input1}
                            placeholder="123"
                            placeholderTextColor="#aaa"
                        />
                    </View>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isChecked}
                        onValueChange={setIsChecked}
                    />
                    <Text style={{fontSize: 18, fontWeight: '400'}}>Save card details</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.text2}>$26</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('YourGoals')} style={styles.button}>
                        <Text style={styles.textbtn}>Pay & Confirm</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default PaymentDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    line1: {
        color: '#D11A38',
        fontSize: 32,
        fontWeight: '600',
        textAlign: 'center',
        top: 50,
    },
    label1: {
        top: 100,
        left: 15,
        fontSize: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 12,
        margin: 12,
        top: 90,
    },
    text2: {
        fontSize: 30,
        marginLeft: 20,
        fontWeight: '700',
    },
    textbtn: {
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 18
    },
    button: {
        backgroundColor: '#D11A38',
        textAlign: 'center',
        padding: 15,
        borderRadius: 12,
    },
    checkboxContainer: {
        flexDirection: 'row',
        top: 120,
        alignItems: 'center',
        marginLeft: 10,
    },
    CheckBox: {
        borderColor: 'lightgray',
        borderWidth: 0.5,
        borderRadius: 12,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        marginTop: 440,

    },
    group: {
        top: 80,
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
});
