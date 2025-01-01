import { View, Text, SafeAreaView, Modal, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ReusableButton from '../components/ReusableButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ResetPassword1 = () => {
    const navigation = useNavigation();
    const [isLoading, setisLoading] = useState(false);

    const handleNavigation =()=>{
        setisLoading(false);
        navigation.navigate('ProfilePage');
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                <Icon name="chevron-left" size={26} color="gray" />
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ fontSize: 18, color: 'gray', fontWeight: '400' }}>Back</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.label}>Reset Password</Text>
            <View style={{ marginTop: 15, }}>
                <Text style={styles.inputlabel1}>New Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder='New Password'
                    placeholderTextColor="lightgray"
                />

                <Text style={styles.inputlabel}>Confirm New Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder='New Password'
                    placeholderTextColor="lightgray"

                />
            </View>
            <ReusableButton text="Save New Password" onPress={() => {
                setisLoading(true)
            }} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={isLoading}>
                <View style={styles.modaloverlay}>
                    <TouchableOpacity style={styles.closeButton}
                        onPress={() => setisLoading(false)}
                    >
                        <Icon name="close" size={24} color="white" />
                    </TouchableOpacity>
                    <View style={styles.modalcontent}>
                        <Icon name="check-circle" size={100} color="#fff" />
                        <Text style={styles.loadertext}>Password Changed!</Text>
                        <TouchableOpacity onPress={handleNavigation}>
                            <Text style={styles.loadertext1}>Go to ProfilePage</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    label: {
        marginTop: 30,
        color: '#D11A38',
        left: 15,
        fontSize: 34,
        fontWeight: '500',
        marginBottom: 25,
    },
    input: {
        padding: 15,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 12,
        marginHorizontal: 12,
        marginVertical: 5,
    },
    inputlabel: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 14,
        fontWeight: '400',
        left: 5,
        color: '#878787',

    },
    inputlabel1: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 14,
        fontWeight: '400',
        color: '#878787',
        left: 5,
    },
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    modaloverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    modalcontent: {
        padding: 20,
        alignItems: 'center',
    },
    loadertext: {
        fontSize: 19,
        fontWeight: '600',
        color: '#fff',
    },
    loadertext1: {
        fontSize: 15,
        fontWeight: '300',
        top: 12,
        color: '#fff',
    },
})

export default ResetPassword1;