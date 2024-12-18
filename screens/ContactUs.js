import { Text, SafeAreaView, View, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import ReusableButton from '../components/ReusableButton';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ContactUs = () => {
    const navigation = useNavigation();

    const item = [
        { id: 1, title: "File Name 1", icon: 'delete' },
        { id: 2, title: "File Name 2", icon: 'delete' },
        { id: 3, title: "File Name 3", icon: 'delete' },
    ];
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
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
            <TouchableOpacity style={styles.item}>
                <View style={styles.section}>
                    <Text style={styles.text}>{'File NAme 1'}</Text>
                </View>
                <Icon name="delete" size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <View style={styles.section}>
                    <Text style={styles.text}>{'File NAme 1'}</Text>
                </View>
                <Icon name="delete" size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <View style={styles.section}>
                    <Text style={styles.text}>{'File NAme 1'}</Text>
                </View>
                <Icon name="delete" size={24} />
            </TouchableOpacity>
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
        height: 140,
        padding: 10,
        fontSize: 18,
        margin: 12,
        borderRadius: 12,
        borderColor: 'lightgray',
        textAlignVertical: 'top',
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
        alignItems: 'center',
        borderRadius: 12,
        width: 353,
        height: 47,
        left: 15,
    },
})