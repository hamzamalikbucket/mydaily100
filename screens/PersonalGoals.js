import { View, SafeAreaView,Text, StyleSheet,ScrollView, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ReusableButton from '../components/ReusableButton';
import Icon from 'react-native-vector-icons/MaterialIcons';


const PersonalGoals = () => {
    const navigation = useNavigation();

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
            <ScrollView>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                <Icon name="chevron-left" size={26} color="gray" />
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Text style={{ fontSize: 18, color: 'gray' }}>Back</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Personal Goals</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            <ReusableButton text='Next' onPress={()=>navigation.navigate('Library')}/>
            </ScrollView>
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
        borderRadius: 12,
        width: 353,
        height: 220,
        backgroundColor: '#FFC0BC',
        marginHorizontal: 30,
        marginVertical: 10,
    },
    text: {
        fontSize: 26,
        alignSelf: 'center',
        marginTop: '25%',      
    },

})
