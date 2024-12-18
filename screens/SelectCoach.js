import { SafeAreaView, Text, StyleSheet, Image, TouchableOpacity, View, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import frame68 from '../assets/images/frame68.png';
import frame69 from '../assets/images/frame69.png';
import frame70 from '../assets/images/frame70.png';
import frame71 from '../assets/images/frame71.png';
import frame72 from '../assets/images/frame72.png';
import frame73 from '../assets/images/frame73.png';
import ReusableButton from '../components/ReusableButton';


const SelectCoach = () => {
    const navigation = useNavigation();

    const item = [
        { id: 1, name: 'Mary Linton ', image: frame68 },
        { id: 2, name: 'James Jhon', image: frame69 },
        { id: 3, name: 'Kely jeans', image: frame70 },
        { id: 4, name: 'Bane Smith', image: frame71 },
        { id: 5, name: 'Robert Patson', image: frame72},
        { id: 6, name: 'Carl Bowman', image: frame73 },
        { id: 7, name: 'Carl Bowman', image: frame73 },
        { id: 8, name: 'Carl Bowman', image: frame73 },
    ];

    const renderItem = ({ item }) => {
        return (
            <View style={styles.coachContainer}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.coachName}>{item.name}</Text>
            </View>
        )
    };
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../assets/images/frame30.png')} style={styles.frame30} />
            </TouchableOpacity>
            <Text style={styles.line1}>Select Available</Text>
            <Text style={styles.line2}>Coach or Manager</Text>
            <FlatList
                data={item}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
            <ReusableButton text= "Next" onPress={()=> navigation.navigate('DateTime')}/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    frame30: {
        marginTop: 25,
        left: 10,
    },
    line1: {
        textAlign: 'center',
        color: '#D11A38',
        fontSize: 36,
        fontWeight: '600',
        marginTop: 25,
    },
    line2: {
        textAlign: 'center',
        color: '#D11A38',
        fontSize: 36,
        fontWeight: '600',
    },
    frame53: {
        alignSelf: 'center',
        marginTop: 15,
    },
    image: {
        width: 100,
        height: 100,
    },
    coachContainer: {
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 0.5,
        borderColor: '#D11A38',
        marginLeft: 40,
        marginTop: 30,
    },
    coachName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})

export default SelectCoach;