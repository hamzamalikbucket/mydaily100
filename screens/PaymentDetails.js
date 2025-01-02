import { StyleSheet, SafeAreaView, ScrollView, Text, View, Image,TextInput, Modal, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckBox from '@react-native-community/checkbox';

const PaymentDetails = () => {
    const navigation = useNavigation();
    const [isChecked, setIsChecked] = useState(false);
    const [OpenModal, setOpenModal] = useState(false);

    const handleNavigation = () => {
        setOpenModal(false);
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', top: 15 }}>
                        <Icon name="chevron-left" size={26} color="gray" />
                        <TouchableOpacity>
                            <Text style={{ fontSize: 18, color: 'gray' }}>Back</Text>
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
                        <Text style={{ color: 'gray' }}>Expire Date</Text>
                        <TextInput
                            style={styles.input1}
                            placeholder="12/34"
                            placeholderTextColor="lightgray"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'gray' }}>CVV</Text>
                            <Icon name="help" size={15} style={{ left: 5, top: 2 }} />
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
                        tintColors={{ true: '#D11A38', false: '#878787' }}

                    />
                    <Text style={{ fontSize: 15, fontWeight: '300', color: 'gray' }}>Save card details</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.text2}>$26</Text>
                    <TouchableOpacity style={styles.button} onPress={() => {
                    setOpenModal(true);
                }}>
                        <Text style={styles.textbtn}>Pay & Confirm</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    visible={OpenModal}
                    animationType="fade"
                    transparent={true}>
                    <View style={styles.modalicon}>
                        <TouchableOpacity style={styles.clossIcon}
                            onPress={() => {
                                setOpenModal(false);
                            }} onPressIn={handleNavigation}>
                            <Icon name="close" size={30} color="#D11A38" />
                        </TouchableOpacity>

                        <View style={styles.modalContent}>
                            <Image source={require('../assets/images/frame16.png')} />
                            <Text style={styles.maintext1}>Payment Successfull </Text>
                        </View>
                    </View>
                </Modal>
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
        fontSize: 34,
        fontWeight: '500',
        textAlign: 'center',
        top: 50,
    },
    label1: {
        top: 100,
        left: 15,
        fontSize: 16,
        color: 'gray',
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
        marginLeft: 10,
        color: 'gray',
        fontWeight: '500',
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
        marginTop: 430,
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
    clossIcon: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    modalicon: {
        backgroundColor: "white",
        borderRadius: 12,
        width: "100%",
        height: "100%",
    },
    modalContent: {
        alignItems: "center",
        top: 250,
    },
    maintext1:{
        color: '#D11A38',
        fontSize: 34,
        fontWeight: '500',
    },
});
