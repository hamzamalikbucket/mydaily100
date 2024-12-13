import { Image, ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import frame66 from '../assets/images/frame66.png';

const YourGoals = () => {
    const navigation = useNavigation();

    const data = [
        {
            id: 1,
            name: 'Assessment Name',
            todoCount: '8 To-Do',
            image: frame66,
        },
        {
            id: 2,
            name: 'Assessment Name',
            todoCount: '8 To-Do',
            image: frame66,
        },
        {
            id: 3,
            name: 'Assessment Name',
            todoCount: '8 To-Do',
            image: frame66,
        },
        {
            id: 4,
            name: 'Assessment Name',
            todoCount: '8 To-Do',
            image: frame66,
        },
        {
            id: 5,
            name: 'Assessment Name',
            todoCount: '8 To-Do',
            image: frame66,
        },
        {
            id: 6,
            name: 'Assessment Name',
            todoCount: '8 To-Do',
            image: frame66,
        },
    ];

    const data2 = [
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
    ];
    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.assessmentName}>{item.name}</Text>
                    <Text style={styles.todoCount}>{item.todoCount}</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.viewButton}>View</Text>
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <ScrollView style={styles.container}>
            <Image source={require('../assets/images/frame57.png')} style={styles.frame57} />
            <Text style={styles.text}>Your Goals</Text>
            <Image source={require('../assets/images/frame58.png')} style={styles.frame58} />
            <View style={styles.group}>
                <Text style={styles.line1}>Your Assessment</Text>
                <Text style={styles.line2}>View all</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
            />
            <View style={styles.group1}>
                <Text style={styles.line1}>My Completed 100</Text>
                <Text style={styles.line2}>View all</Text>
            </View>
            <FlatList
                data={data2}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
            />
        </ScrollView>
    )
}

export default YourGoals;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    frame57: {
        alignSelf: 'center',
        marginTop: 15,
        width: '90%',
    },
    text: {
        fontSize: 36,
        fontWeight: '600',
        color: '#D11A38',
        left: 25,
        marginTop: 20,
    },
    frame58: {
        alignSelf: 'center',
        marginTop: 25,
        width: '100%',
    },
    assessmentName: {
        fontSize: 16,
        fontWeight: '500',
    },
    todoCount: {
        fontSize: 14,
        color: '#D11A38',
    },
    viewButton: {
        color: 'red',
        fontSize: 14,
        fontWeight: 'bold',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 8,
        elevation: 2,
    },
    textContainer: {
        flex: 1,
    },
    image: {
        width: 50,
        height: 50,
    },
    group: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
    },
    line1: {
        fontSize: 18,
        fontWeight: '600',
        left: 15,
    },
    line2: {
        fontSize: 18,
        fontWeight: '400',
        right: 15,
        color: '#D11A38',
    },
    listContainer: {
        marginTop: 15,
    },
    group1:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})