import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ReusableButton from '../components/ReusableButton';
// import { Icon } from 'react-native-vector-icons';

const PicUpload = () => {
    const navigation = useNavigation();
    const data = [
        { id: 1},
        { id: 2},
        { id: 3},
        { id: 4},
        { id: 5},
    ];
    const renderItem = ({ item }) => (
        <TouchableOpacity>
        <View style={styles.list}>

        </View>
        </TouchableOpacity>
    );
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../assets/images/frame30.png')} style={styles.frame30} />
            </TouchableOpacity>
            <Text style={styles.title}>Upload a Picture{"\n"} of your Dreams</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item)=>item.id}
            />
            <ReusableButton text='save' onPress={() => navigation.navigate('Setup')} />
        </ScrollView>
    )
}
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
    },
    list:{
        height: 60,
        marginBottom: 15,
        borderRadius: 12,
        width:353,
        height: 220,
        marginTop: '10%',
        backgroundColor: '#FFC0BC',
        margin:30,
    },

})

export default PicUpload;