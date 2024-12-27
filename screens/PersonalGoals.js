import { View, SafeAreaView,Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
// import { useNavigation } from '@react-navigation/native';
import ReusableButton from '../components/ReusableButton';
import Icon from 'react-native-vector-icons/MaterialIcons';


const PersonalGoals = () => {
    // const navigation = useNavigation();

    const data = [
        { id: 1, title: 'Health' },
        { id: 2, title: 'Wealth' },
        { id: 3, title: 'Travel' },
        { id: 4, title: 'Excersie' },

    ];
    const renderItem = ({ item }) => (
        <TouchableOpacity>
            <View style={styles.list}>
                <Text style={styles.text}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                <Icon name="chevron-left" size={26} color="gray" />
                <TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>Back</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Personal Goals</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            <ReusableButton text='Next' />
        </SafeAreaView>
    )
}
export default PersonalGoals;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        width: 353,
        height: 220,
        marginTop: '10%',
        backgroundColor: '#FFC0BC',
        margin: 30,

    },
    text: {
        textAlign: 'center',
        fontSize: 26,
        padding: '25%',
    },

})
