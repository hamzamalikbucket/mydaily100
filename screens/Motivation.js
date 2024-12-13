import { View,ScrollView, Image, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ReusableButton from '../components/ReusableButton';

const Motivation = () => {
    const navigation = useNavigation();

    const data = [
        { id: 1, title: 'Health' },
        { id: 2, title: 'Wealth' },
        { id: 3, title: 'Travel' },
        { id: 4, title: 'Excersie' },
        { id: 5, title: 'Games' },
        { id: 6, title: 'Swimming' },
    ];
    const renderItem = ({ item }) => (
        <TouchableOpacity>
        <View style={styles.list}>
            <Text style={styles.text}>{item.title}</Text>
        </View>
        </TouchableOpacity>
    );
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../assets/images/frame30.png')} style={styles.frame30} />
            </TouchableOpacity>
            <Text style={styles.title}>Add Motivation</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            <ReusableButton text='upload your dreams' onPress={() => navigation.navigate('PicUpload')} />
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
        left: 10,
    },
    title: {
        alignSelf: 'center',
        color: '#D11A38',
        fontSize: 36,
        fontWeight: '600',
    },
    list: {
        height: 60,
        marginBottom: 15,
        borderRadius: 12,
        width:353,
        height: 220,
        marginTop: '10%',
        backgroundColor: '#FFC0BC',
        margin:30,
        
    },
    text: {
        textAlign: 'center',
        fontSize: 26,
        padding: '25%',
    },

})
export default Motivation;