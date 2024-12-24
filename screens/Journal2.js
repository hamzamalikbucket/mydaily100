import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import frame76 from '../assets/images/frame76.png';

const Journal2 = () => {
    const item = [
        {
            id: 1,
            name: 'GYM Workout',
            description: 'Today I did 100 consecutive biceps reps. Best...',
            text: '5 files attached',
            image: frame76,
        },
        {
            id: 2,
            name: 'GYM Workout',
            description: 'Today I did 100 consecutive biceps reps. Best...',
            text: '5 files attached',
            image: frame76,
        },
        {
            id: 3,
            name: 'GYM Workout',
            description: 'Today I did 100 consecutive biceps reps. Best...',
            text: '5 files attached',
            image: frame76,
        },
        {
            id: 4,
            name: 'GYM Workout',
            description: 'Today I did 100 consecutive biceps reps. Best...',
            text: '5 files attached',
            image: frame76,
        },
        {
            id: 5,
            name: 'GYM Workout',
            description: 'Today I did 100 consecutive biceps reps. Best...',
            text: '5 files attached',
            image: frame76,
        },
        {
            id: 6,
            name: 'GYM Workout',
            description: 'Today I did 100 consecutive biceps reps. Best...',
            text: '5 files attached',
            image: frame76,
        },
        {
            id: 7,
            name: 'GYM Workout',
            description: 'Today I did 100 consecutive biceps reps. Best...',
            text: '5 files attached',
            image: frame76,
        },
        {
            id: 8,
            name: 'GYM Workout',
            description: 'Today I did 100 consecutive biceps reps. Best...',
            text: '5 files attached',
            image: frame76,
        },
        {
            id: 9,
            name: 'GYM Workout',
            description: 'Today I did 100 consecutive biceps reps. Best...',
            text: '5 files attached',
            image: frame76,
        },
        {
            id: 10,
            name: 'GYM Workout',
            description: 'Today I did 100 consecutive biceps reps. Best...',
            text: '5 files attached',
            image: frame76,
        },
        {
            id: 11,
            name: 'GYM Workout',
            description: 'Today I did 100 consecutive biceps reps. Best...',
            text: '5 files attached',
            image: frame76,
        },
        {
            id: 12,
            name: 'GYM Workout',
            description: 'Today I did 100 consecutive biceps reps. Best...',
            text: '5 files attached',
            image: frame76,
        },
    ];

    const renderItem = ({ item }) => {
        return (
            <View style={styles.listContainer}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.titleName}>{item.name}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="chevron-left" size={26} color="gray" />
                    <TouchableOpacity>
                        <Text style={{ fontSize: 18 }}>Back</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Icon name="search" size={28} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 12 }}>
                <Text style={styles.title}>Your Journal</Text>
                
                <Icon name="send" size={24} style={styles.icon} />
            </View>
            <FlatList
                data={item}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.contentContainer}
            />
        </SafeAreaView>
    );
};

export default Journal2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between',
        marginTop: 10,
    },
    title: {
        color: '#D11A38',
        fontSize: 36,
        fontWeight: '600',
    },
    icon: {
        color: '#D11A38',
    },
    listContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 15,
        borderRadius: 12,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    titleName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: '#707070',
        marginBottom: 8,
    },
    text: {
        fontSize: 14,
        color: '#D11A38',
    },
    contentContainer: {
        paddingBottom: 20,
    },
});
