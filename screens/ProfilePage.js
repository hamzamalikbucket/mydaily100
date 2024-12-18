import { View,SafeAreaView,ScrollView, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import {useNavigation } from '@react-navigation/native';
import ReusableButton from '../components/ReusableButton';

const ProfilePage = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={require('../assets/images/frame30.png')} style={styles.frame30} />
            </TouchableOpacity>
            <Text style={styles.title}>Profile Information</Text>
            <Image source={require('../assets/images/frame38.png')} style={styles.frame38} />
            <Image source={require('../assets/images/frame39.png')} style={styles.frame39} />
            <Text style={styles.label1}>Full Name</Text>
            <TextInput
                style={styles.input}
                placeholder='Jhon Doe'
            />
            <Text style={styles.label2}>Country</Text>
            <TextInput
                style={styles.input}
                placeholder='United States America'
            />
            <Text style={styles.label3}>City</Text>
            <TextInput
                style={styles.input}
                placeholder='New York'
            />
            <Text style={styles.label4}>Address</Text>
            <TextInput
                style={styles.input}
                placeholder='great street 01'
            />
            <ReusableButton text='Add Motivation' onPress={() => navigation.navigate('Motivation')} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    frame30: {
        marginTop: 15,
        left: 10,
    },
    title: {
        alignSelf: 'center',
        marginTop: 30,
        color: '#D11A38',
        fontSize: 36,
        fontWeight: '600',
    },
    frame38: {
        alignSelf: 'center',
        marginTop: '30%',
        position: 'absolute',
    },
    frame39: {
        alignSelf: 'center',
        marginTop: '15%',
    },
    label1: {
        fontSize: 18,
        marginTop: '20%',
        left: 15,
    },
    label2: {
        fontSize: 18,
        left: 15,
    },
    label3: {
        fontSize: 18,
        left: 15,
    },
    label4: {
        fontSize: 18,
        left: 15,
    },
    input: {
        marginLeft: 15,
        borderColor: 'lightgray',
        borderWidth: 1,
        margin: 15,
        borderRadius: 12,
        padding: 15,
    },

})
export default ProfilePage;