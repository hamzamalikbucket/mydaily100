import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, FlatList, Image, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ReusableButton from '../components/ReusableButton';
import frame74 from '../assets/images/frame74.png';
import frame75 from '../assets/images/frame75.png';

const Editjournal = () => {

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
                    <TouchableOpacity>
                        <Text style={{ fontSize: 18 }}>Back</Text>
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
                </ScrollView>
                <ReusableButton text='Save' />
                <TouchableOpacity>
                    <Text style={styles.btntext1}>Delete</Text>
                </TouchableOpacity>
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
    },
    lable1: {
        fontSize: 15,
        marginTop: 15,
        marginLeft: 15,
    },
    text1: {
        marginLeft: 18,
        fontSize: 15,
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
        marginBottom: 25,
    },
    scrollContent: {
        paddingBottom: 20,
    },
    deleteBtn: {
        position: 'absolute',
        alignSelf: 'center',
        top: 80,
        backgroundColor: '#D11A38',

        borderRadius: 50,
        padding: 5,
    },
    btntext1: {
        width: 365,
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
    },
})