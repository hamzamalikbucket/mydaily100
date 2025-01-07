import { StyleSheet, Text, View, FlatList, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Notification = () => {
    const data = [
        {
            id: 1,
            name: 'Alex Carry',
            message: "You have new message",
        },
        {
            id: 2,
            name: 'Harry',
            message: "You have new message",
        },
        {
            id: 3,
            name: ' Carl Bowman',
            message: "You have new message",
        },
        {
            id: 4,
            name: 'Jane',
            message: "You have new message",
        },
        {
            id: 5,
            name: 'Robert Patson',
            message: "You have new message",
        },
        {
            id: 6,
            name: 'Bane Smith',
            message: "You have new message",
        },
        {
            id: 7,
            name: 'Kely jeans',
            message: "You have new message",
        },
        {
            id: 8,
            name: 'James Jhon',
            message: "You have new message",
        },
        {
            id: 9,
            name: 'Jhon',
            message: "You have new message",
        },
        {
            id: 10,
            name: 'MAX walter',
            message: "You have new message",
        },
        {
            id: 11,
            name: ' Carry',
            message: "You have new message",
        },

    ];

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity>
                <View style={styles.itemcontainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.message}>{item.message}</Text>
                </View>
            </TouchableOpacity>

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
            <View>
                <Text style={{ fontSize: 34, color: '#D11A38', fontWeight: '500', textAlign: 'center' }}>Notifications</Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listcontainer}
            />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Notification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    listcontainer: {
        margin: 15,
    },
    itemcontainer: {
        borderColor: '#D11A38',
        borderWidth: 0.5,
        borderRadius: 12,
        marginVertical: 3,
        padding: 10,
        borderBottomWidth: 2,
    },
    name: {
        color: '#D11A38',
        fontSize: 18,
        fontWeight: '500',
    },
    message: {
        color: '#898989',
        fontSize: 14,
        fontWeight: '500',
    },
})