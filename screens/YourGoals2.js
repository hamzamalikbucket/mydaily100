import { StyleSheet, Text, View, Image, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import frame66 from '../assets/images/frame66.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const YourGoals2 = () => {
    const navigation = useNavigation();

    const data = [
        {
            id: 1,
            name: 'My Completed 100',
            todoCount: 'Finished',
            image: frame66,
        },
        {
            id: 2,
            name: 'My Completed 100',
            todoCount: 'Finished',
            image: frame66,
        },
        {
            id: 3,
            name: 'My Completed 100',
            todoCount: 'Finished',
            image: frame66,
        },
        {
            id: 4,
            name: 'My Completed 100',
            todoCount: 'Finished',
            image: frame66,
        },
        {
            id: 5,
            name: 'My Completed 100',
            todoCount: 'Finished',
            image: frame66,
        },
        {
            id: 6,
            name: 'My Completed 100',
            todoCount: 'Finished',
            image: frame66,
        },
        {
            id: 7,
            name: 'My Completed 100',
            todoCount: 'Finished',
            image: frame66,
        },
        {
            id: 8,
            name: 'My Completed 100',
            todoCount: 'Finished',
            image: frame66,
        },
        {
            id: 9,
            name: 'My Completed 100',
            todoCount: 'Finished',
            image: frame66,
        },
        {
            id: 10,
            name: 'My Completed 100',
            todoCount: 'Finished',
            image: frame66,
        },
        {
            id: 11,
            name: 'My Completed 100',
            todoCount: 'Finished',
            image: frame66,
        },
        {
            id: 12,
            name: 'My Completed 100',
            todoCount: 'Finished',
            image: frame66,
        },
        {
            id: 13,
            name: 'My Completed 100',
            todoCount: 'Finished',
            image: frame66,
        },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.assessmentName}>{item.name}</Text>
                <Text style={styles.todoCount}>{item.todoCount}</Text>
            </View>
            <TouchableOpacity onPress={() => console.log(`${item.name} clicked`)}>
                <Text style={styles.viewButton}>Download</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View>
                <View style={styles.icon}>
                    <Icon name="chevron-left" size={26} color="gray" />
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.icontext}>Back</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}>You Have 20 Completed</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
            />
        </SafeAreaView>
    );
};

export default YourGoals2;

const styles = StyleSheet.create({

    text: {
        color: '#D11A38',
        fontSize: 36,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 25,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 8,
    },
    textContainer: {
        flex: 1,
    },
    assessmentName:{
        fontSize: 16,
        fontWeight: '500',
        color: '#5E5E5E',
    },
    todoCount: {
        fontSize: 14,
        color: '#D11A38',
    },
    listContainer: {
        marginTop: 15,
    },
    icon: {
        marginTop: 15,
        left: 12,
        flexDirection: 'row',
    },
    icontext: {
        marginTop: 2,
        fontSize: 17,
        color: 'gray',
    },
    viewButton: {
        color: '#D11A38',
        fontWeight: '600',
        fontSize: 14,
    },
    image: {
        width: 50,
        height: 50,
    },
});
