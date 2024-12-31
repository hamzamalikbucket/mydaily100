import { Image, ScrollView, StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import frame66 from '../assets/images/frame66.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

    ];
    const renderItem = ({ item, section }) => {
        return (
            <View style={styles.itemContainer}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.assessmentName}>{item.name}</Text>
                    <Text style={styles.todoCount}>{item.todoCount}</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.viewButton}>
                        {section === 'completed' ? 'Download' : 'View'}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ alignSelf: 'flex-end' }}>
                    <TouchableOpacity>
                        <Icon name="notifications" size={30} color="#D11A38" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}>Your Goals</Text>
                <Image source={require('../assets/images/frame58.png')} style={styles.frame58} />
                <View style={styles.group}>
                    <Text style={styles.line1}>Your Assessment</Text>
                    <Text style={styles.line2}>View all</Text>
                </View>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={(props) => renderItem({ ...props, section: 'assessment' })}
                    contentContainerStyle={styles.listContainer}
                />
                <View style={styles.group1}>
                    <TouchableOpacity onPress={() => navigation.navigate('YourGoals2')}>
                        <Text style={styles.line1}>My Completed 100</Text>
                    </TouchableOpacity>
                    <Text style={styles.line2}>View all</Text>
                </View>
                <FlatList
                    data={data2}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={(props) => renderItem({ ...props, section: 'completed' })}
                    contentContainerStyle={styles.listContainer}
                />
            </ScrollView>
        </SafeAreaView>
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
        fontSize: 34,
        fontWeight: '600',
        color: '#D11A38',
        marginTop: 20,
        marginLeft: 15,
    },
    frame58: {
        alignSelf: 'center',
        marginTop: 25,
        width: '100%',
    },
    assessmentName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#5E5E5E',
    },
    todoCount: {
        fontSize: 14,
        fontWeight: '400',
        color: '#D11A38',
    },
    viewButton: {
        color: '#D11A38',
        fontSize: 14,
        fontWeight: '400',
        right: 10,
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
    image: {
        width: 60,
        height: 60,
    },
    group: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
    },
    line1: {
        fontSize: 18,
        fontWeight: '600',
        color:'#878787',
        left: 20,
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
    group1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
    },
})