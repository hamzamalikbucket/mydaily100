import { View, SafeAreaView, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList, Modal } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ReusableButton from '../components/ReusableButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PicUpload = () => {
    const navigation = useNavigation();
    const [OpenModal, setOpenModal] = useState(false);
    // const handleNavigation = () => {
    //     setOpenModal(false);
    //     navigation.navigate('ContactUs');
    // };
    const data = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity>
            <View style={styles.list}>
                <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                    <Icon name="file-upload" size={40} color="gray" alignSelf='center' padding={90} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                    <Icon name="chevron-left" size={26} color="gray" />
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{ fontSize: 18, color: 'gray' }}>Back</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>Upload a Picture{"\n"} of your Dreams</Text>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
                <ReusableButton text='save' onPress={() => {
                    setOpenModal(true);
                }} />
                <Modal
                    visible={OpenModal}
                    animationType="slide"
                    transparent={true}>
                    <View style={styles.modalicon}>
                        <TouchableOpacity style={styles.clossIcon}
                            onPress={() => {
                                setOpenModal(false);
                                navigation.navigate("ContactUs")
                            }} >
                            <Icon name="close" size={30} color="#D11A38" />
                        </TouchableOpacity>

                        <View style={styles.modalContent}>
                            <Image source={require('../assets/images/frame16.png')} />
                            <Text style={styles.maintext1}>Successfully Set up</Text>
                            <Text style={styles.maintext2}>congratulations your Profile</Text>
                            <Text style={styles.maintex3}>account was set now</Text>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    title: {
        alignSelf: 'center',
        color: '#D11A38',
        fontSize: 34,
        fontWeight: '500',
        textAlign: 'center',
        marginVertical: 20,
    },
    list: {
        height: 60,
        marginVertical: 0,
        marginBottom: 12,
        borderRadius: 12,
        width: 353,
        height: 220,
        backgroundColor: '#fabbdc',
        alignSelf: 'center',
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
    maintext1: {
        fontSize: 34,
        fontWeight: '600',
        color: "#D11A38",
    },
    maintext2: {
        fontSize: 15,
        fontWeight: '400',
    },
    maintex3: {
        fontSize: 15,
        fontWeight: '400',
    },
});

export default PicUpload;
