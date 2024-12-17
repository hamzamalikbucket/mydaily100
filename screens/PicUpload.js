import { View, SafeAreaView, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ReusableButton from '../components/ReusableButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PicUpload = () => {
    const navigation = useNavigation();

    const data = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity>
            <View style={styles.list}>
                <Icon name="file-upload" size={40} color="gray" />
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../assets/images/frame30.png')} style={styles.frame30} />
            </TouchableOpacity>
            <Text style={styles.title}>Upload a Picture{"\n"} of your Dreams</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
            <ReusableButton text='save' onPress={() => navigation.navigate('Setup')} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    frame30: {
        marginTop: 20,
    },
    title: {
        alignSelf: 'center',
        color: '#D11A38',
        fontSize: 36,
        fontWeight: '600',
        textAlign: 'center',
        marginVertical: 20,
    },
    list: {
        width: 353,
        height: 220,
        backgroundColor: '#FFC0BC',
        marginVertical: 15,
        marginHorizontal: 'auto', 
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',    
        elevation: 3,             
    },
});

export default PicUpload;
