import { View, Text, SafeAreaView, Modal, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import ReusableButton from '../components/ReusableButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ResetPassword1 = () => {
    const navigation = useNavigation();
    const [isLoading, setisLoading] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                <Icon name="chevron-left" size={26} color="gray" />
                <TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>Back</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.label}>Reset Password</Text>
            <Text style={styles.inputlabel1}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder='New Password'
            />
            <Text style={styles.inputlabel}>Confirm New Password</Text>
            <TextInput
                style={styles.input}
                placeholder='New Password'
            />
            <ReusableButton text="Save New Password" onPress={() =>{setisLoading(true)
                setTimeout(() => {
                    setisLoading(false)
                }, 2000)
            }} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={isLoading}>
                <View style={styles.modaloverlay}>
                    <View style={styles.modalcontent}>
                        <Icon name= "check-circle" size={100} color="#fff"/>
                        <Text style={styles.loadertext}>Password Changed!</Text>
                        <Text style={styles.loadertext1}>back to login</Text>
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
        textAlign: 'center',
        color: '#D11A38',
        fontSize: 36,
        fontWeight: '600',
    },
    input: {
        padding: 15,
        borderWidth: 1,
        borderColor: 'lightgray',
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 12,
    },
    inputlabel: {
        padding: 12,
        fontSize: 16,
        left: 5,
    },
    inputlabel1: {
        marginTop: 35,
        padding: 12,
        fontSize: 16,
        left: 5,
    },
    modaloverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
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
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
    },
})

export default ResetPassword1;