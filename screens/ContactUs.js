import { Text, SafeAreaView, View, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput, Modal } from 'react-native';
import React, { useState } from 'react';
import ReusableButton from '../components/ReusableButton';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ContactUs = () => {
    const navigation = useNavigation();
    const [isLoading, setisLoading] = useState(false);

    const handleNavigation=()=>{
        setisLoading(false);
        navigation.navigate('SelectCoach')
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                    <Icon name="chevron-left" size={26} color="gray" />
                    <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                        <Text style={{ fontSize: 18, color: 'gray' }}>Back</Text>
                    </TouchableOpacity>
                </View>

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

                <ReusableButton text="Submit" onPress={() => setisLoading(true)} />
                <TouchableOpacity style={styles.item}>
                    <View style={styles.section}>
                        <Text style={{ color: '#595959', fontWeight: '300' }}>{'File Name 1'}</Text>
                    </View>
                    <Icon name="delete" size={24} color='gray' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <View style={styles.section}>
                        <Text style={{ color: '#595959', fontWeight: '300' }}>{'File Name 2'}</Text>
                    </View>
                    <Icon name="delete" size={24} color='gray' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <View style={styles.section}>
                        <Text style={{ color: '#595959', fontWeight: '300' }}>{'File Name 3'}</Text>
                    </View>
                    <Icon name="delete" size={24} color='gray' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <View style={styles.section}>
                        <Text style={{ color: '#595959', fontWeight: '300' }}>{'File Name 4'}</Text>
                    </View>
                    <Icon name="delete" size={24} color='gray' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <View style={styles.section}>
                        <Text style={{ color: '#595959', fontWeight: '300' }}>{'File Name 5'}</Text>
                    </View>
                    <Icon name="delete" size={24} color='gray' />
                </TouchableOpacity>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={isLoading}>
                    <View style={styles.modaloverlay}>
                        <TouchableOpacity style={styles.closeButton}
                            onPress={handleNavigation}
                        >
                            <Icon name="close" size={24} color="white" />
                        </TouchableOpacity>
                        <View style={styles.modalcontent}>
                            <Icon name="check-circle" size={100} color="#fff" />
                            <Text style={styles.loadertext}>Your Request Sent!</Text>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ContactUs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    label1: {
        color: '#D11A38',
        fontSize: 34,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 25,
    },
    label2: {
        left: 12,
        fontSize: 16,
        fontWeight: '400',
        color: '#898989',
    },
    label3: {
        left: 12,
        fontSize: 16,
        fontWeight: '400',
        color: '#898989',

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
        height: 180,
        padding: 10,
        fontSize: 15,
        margin: 12,
        borderRadius: 12,
        borderColor: 'lightgray',
        textAlignVertical: 'top',
    },
    button: {
        borderWidth: 1,
        borderColor: '#D11A38',
        padding: 12,
        margin: 20,
        borderRadius: 12,
    },
    btntext: {
        textAlign: 'center',
        color: '#595959',
        fontSize: 15,
        fontWeight: '400',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'lightgray',
        borderWidth: 1,
        margin: 15,
        borderRadius: 12,
    },
    section: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 0,
        alignItems: 'center',
        borderRadius: 12,
        width: 353,
        height: 50,
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
        fontSize: 15,
        top: 12,
        fontWeight: '300',
        color: '#fff',
    },
})