import { StyleSheet, View, SafeAreaView, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Setting = () => {

    const item = [

        { id: 1, icon: 'subscriptions', title: 'Subscriptions' },
        { id: 2, icon: 'notifications', title: 'Notification Setting' },
        { id: 3, icon: 'shield', title: 'Change Password' },
    ];

    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                <Icon name="chevron-left" size={26} color="gray" />
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ fontSize: 18, color: 'gray' }}>Back</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.label}>Settings</Text>
            <Image source={require('../assets/images/frame41.png')} style={styles.frame41} />
            <TouchableOpacity>
                <Text style={styles.label2}>Edit profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                <View style={styles.section}>
                    <Icon name={'subscriptions'} size={24} />
                    <Text style={styles.text}>{'subscriptions'}</Text>
                </View>
                <Icon name="chevron-right" size={36} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                <View style={styles.section}>
                    <Icon name={'notifications'} size={24} />
                    <Text style={styles.text}>{'Notification Setting'}</Text>
                </View>
                <Icon name="chevron-right" size={36} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ChangePassword')}>
                <View style={styles.section}>
                    <Icon name={'shield'} size={24} />
                    <Text style={styles.text}>{'Change Password'}</Text>
                </View>
                <Icon name="chevron-right" size={36} />
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default Setting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    frame30: {
        marginTop: 35,
        left: 10,
    },
    label: {
        textAlign: 'center',
        color: '#D11A38',
        fontSize: 32,
        fontWeight: '600',
        marginTop: '10%',
    },
    frame41: {
        alignSelf: 'center',
        position: 'absolute',
        marginTop: '40%',
    },
    label2: {
        textAlign: 'center',
        fontSize: 17,
        marginTop: '33%',
        fontWeight: '600',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        width: 353,
        height: 44,
        left: 15,
    },
    text: {
        padding: 10,
        fontSize: 16,
        color: 'grey',
        fontWeight: '600',
    },
})
