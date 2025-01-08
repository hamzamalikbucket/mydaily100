import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, FlatList, Image, ScrollView, Modal } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ReusableButton from '../components/ReusableButton';
import frame74 from '../assets/images/frame74.png';
import frame75 from '../assets/images/frame75.png';
import { useNavigation } from '@react-navigation/native';

const Editjournal = () => {

    const navigation = useNavigation();
    const [isLoading, setisLoading] = useState(false);
    const [modalType, setModaltype] = useState('');

    const handleSave = () => {
        setModaltype("save");
        setisLoading(true);
    };

    const handleDelete = () => {
        setModaltype("delete");
        setisLoading(true);
    };

    const item = [
        { id: 1, image: frame74 },
        { id: 2, image: frame75 },
        { id: 3, image: frame74 },
        { id: 4, image: frame75 },
    ];

    const renderItem = ({ item }) => {
        return (
            <View style={{ position: 'relative' }} >
                <Image source={item.image} />
            </View>
        )
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                    <Icon name="chevron-left" size={26} color="gray" />
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{ fontSize: 18, fontWeight: '400', color: 'gray' }}>Back</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}>Edit Journal</Text>
                <Text style={styles.lable}>journal Name</Text>
                <TextInput
                    style={{
                        height: 50,
                        borderColor: 'lightgray',
                        borderWidth: 1,
                        margin: 10,
                        padding: 10,
                        fontSize: 16,
                        borderRadius: 12,
                    }}
                    placeholder='Text here'
                    placeholderTextColor='#C9C9C9'

                />
                <Text style={styles.lable1}>journal Discription</Text>
                <TextInput
                    style={{
                        height: 250,
                        borderColor: 'lightgray',
                        borderWidth: 1,
                        margin: 10,
                        padding: 10,
                        fontSize: 16,
                        borderRadius: 12,
                        textAlignVertical: 'top',

                    }}
                    placeholder='Text here'
                    multiline={true}
                    placeholderTextColor='#C9C9C9'
                />
                <Text style={styles.text1}>Add images/Videos/Audios</Text>
                <TouchableOpacity>
                    <Text style={styles.btntext}>Upload</Text>
                </TouchableOpacity>
                <FlatList
                    data={item}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                />
                <ReusableButton text='Save' onPress={handleSave} />
                <TouchableOpacity onPress={handleDelete}>
                    <Text style={styles.btntext1}>Delete</Text>
                </TouchableOpacity>
            </ScrollView>
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
                        {modalType === 'save' && (
                            <>
                                <Icon name="check-circle" size={100} color="#fff" />
                                <Text style={styles.loadertext}>Journal Saved!</Text>
                            </>
                        )}
                        {modalType === 'delete' && (
                            <>
                                <View style={{ backgroundColor: '#fff', alignItems: 'center', width: 360, height: 210, padding: 15 }}>
                                    <Icon name="delete" size={46} color="#D11A38" />
                                    <Text style={styles.deleteText}>Are you sure{"\n"} you want to delete?</Text>
                                    <View style={styles.modalButtons}>
                                        <TouchableOpacity
                                            style={[styles.modalButton, styles.deleteButton]}
                                            onPress={() => {
                                                setisLoading(false);
                                            }}>
                                            <Text style={styles.buttonText}>Delete</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={[styles.modalButton, styles.cancelButton]}
                                            onPress={() => {
                                                setisLoading(false);
                                            }}>
                                            <Text style={styles.buttonText}>Cancel</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </>
                        )}
                    </View>
                </View>
            </Modal>

        </SafeAreaView>

    )
}

export default Editjournal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 36,
        fontWeight: '600',
        color: '#D11A38',
        marginTop: 20,
        textAlign: 'center',
    },
    lable: {
        fontSize: 15,
        marginTop: 35,
        marginLeft: 15,
        color: 'gray',
        fontWeight: '500',
    },
    lable1: {
        fontSize: 15,
        marginTop: 15,
        marginLeft: 15,
        color: 'gray',
        fontWeight: '500',
    },
    text1: {
        marginLeft: 18,
        color: 'gray',
        fontSize: 15,
        fontWeight: '500',
    },
    btntext: {
        width: 365,
        height: 52,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#D11A38',
        top: 8,
        alignSelf: 'center',
        padding: 15,
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 18,
        color: 'gray',
        marginBottom: 25,
    },
    btntext1: {
        width: 353,
        height: 52,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#D11A38',
        alignSelf: 'center',
        padding: 15,
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 18,
        marginBottom: 25,
        color: 'gray',
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
    deleteText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    modalButton: {
        padding: 10,
        borderRadius: 12,
        width: 141,
        alignItems: 'center',
    },
    deleteButton: {
        backgroundColor: '#D11A38',
    },
    cancelButton: {
        backgroundColor: '#D11A38',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
})