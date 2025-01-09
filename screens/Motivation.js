import { View, SafeAreaView, Image, Text, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ReusableButton from '../components/ReusableButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Motivation = () => {
    const navigation = useNavigation();
    const [seectedId, setSelectedId] = useState(null);
    const data = [
        { id: 1, title: 'Health' },
        { id: 2, title: 'Wealth' },
        { id: 3, title: 'Travel' },
        { id: 4, title: 'Excersie' },

    ];
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => setSelectedId(item.id)}>
            <View style={[styles.list,
            { backgroundColor: seectedId === item.id ? '#ffe4e1' : '#fabbdc' }
            ]}>
                <Text style={styles.text}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="chevron-left" size={26} color="gray" />
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={{ fontSize: 18, color: 'gray' }}>Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.title}>Add Motivation</Text>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
                <View style={{marginVertical: 25}}>
                    <ReusableButton text='upload your dreams' onPress={() => navigation.navigate('PicUpload')} />
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
    header: {
        padding: 10,
    },
    title: {
        alignSelf: 'center',
        color: '#D11A38',
        fontSize: 34,
        fontWeight: '500',
        marginTop: 15,
        marginBottom: 15,
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
    text: {
        textAlign: 'center',
        justifyContent: "center",
        fontSize: 28,
        fontWeight: '500',
        padding: 80,
        color: '#595959',
    },

})
export default Motivation;