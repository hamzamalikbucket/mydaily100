import { View, SafeAreaView, ScrollView, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ReusableButton from '../components/ReusableButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfilePage = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                    <Icon name="chevron-left" size={26} color="gray" />
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{ fontSize: 18, color: 'gray' }}>Back</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>Profile Information</Text>
                <View style={styles.imageFrame}>
                    <Image source={require('../assets/images/frame38.png')} style={styles.frame38} />
                    <Image source={require('../assets/images/frame39.png')} style={styles.frame39} />
                </View>
                <Text style={styles.label1}>Full Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Jhon Doe'
                    placeholderTextColor="lightgray"
                />
                <Text style={styles.label2}>Country</Text>
                <TextInput
                    style={styles.input}
                    placeholder='United States America'
                    placeholderTextColor="lightgray"
                />
                <Text style={styles.label3}>City</Text>
                <TextInput
                    style={styles.input}
                    placeholder='New York'
                    placeholderTextColor="lightgray"
                />
                <Text style={styles.label4}>Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder='great street 01'
                    placeholderTextColor="lightgray"
                />
                <View style={{ marginTop: 28 }}>
                    <ReusableButton text='Add Motivation' onPress={() => navigation.navigate('Motivation')} />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        textAlign: 'center',
        color: '#D11A38',
        fontSize: 34,
        fontWeight: '500',
    },
    imageFrame: {
        height: 150,
        justifyContent: 'center',
        position: 'relative',
    },
    frame38: {
        alignSelf: 'center',
        height: '100%',
        resizeMode: 'contain',
        marginTop: 20,
    },
    frame39: {
        position: 'absolute',
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    label1: {
        fontSize: 18,
        left: 15,
        color: '#878787',
        fontWeight: '400',
    },
    label2: {
        fontSize: 18,
        left: 15,
        color: '#878787',
        fontWeight: '400',
    },
    label3: {
        fontSize: 18,
        left: 15,
        color: '#878787',
        fontWeight: '400',
    },
    label4: {
        fontSize: 18,
        left: 15,
        color: '#878787',
        fontWeight: '400',
    },
    input: {
        borderColor: 'lightgray',
        borderWidth: 1,
        marginVertical: 10,
        marginHorizontal: 15,
        borderRadius: 12,
    },

})
export default ProfilePage;