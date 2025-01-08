import { SafeAreaView, Text, StyleSheet, Image,ScrollView, TouchableOpacity, View, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import frame68 from '../assets/images/frame68.png';
import frame69 from '../assets/images/frame69.png';
import frame70 from '../assets/images/frame70.png';
import frame71 from '../assets/images/frame71.png';
import frame72 from '../assets/images/frame72.png';
import frame73 from '../assets/images/frame73.png';
import ReusableButton from '../components/ReusableButton';
import Icon from 'react-native-vector-icons/MaterialIcons';


const MyTeam = () => {
    const navigation = useNavigation();

    const item = [
        { id: 1, name: 'Mary Linton ', image: frame68, discription: "Coach Field" },
        { id: 2, name: 'James Jhon', image: frame69, discription: "Coach Field" },
        { id: 3, name: 'Kely jeans', image: frame70, discription: "Coach Field" },
        { id: 4, name: 'Bane Smith', image: frame71, discription: "Coach Field" },
        { id: 5, name: 'Robert Patson', image: frame72, discription: "Coach Field" },
        { id: 6, name: 'Carl Bowman', image: frame73, discription: "Coach Field" },
        { id: 7, name: 'Carl Bowman', image: frame73, discription: "Coach Field" },
        { id: 8, name: 'Carl Bowman', image: frame73, discription: "Coach Field" },
    ];

    const renderItem = ({ item }) => {
        return (
            <View style={styles.coachContainer}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.coachName}>{item.name}</Text>
                <Text style={styles.coachdiscription}>{item.discription}</Text>
            </View>
        )
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                <Icon name="chevron-left" size={26} color="gray" />
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ fontSize: 18, color: 'gray' }}>Back</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.line1}>Select Available {"\n"}Coach or Manager</Text>
            <FlatList
                data={item}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
            <ReusableButton text="Next" onPress={() => navigation.navigate('DateTime')} />
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    line1: {
        textAlign: 'center',
        color: '#D11A38',
        fontSize: 34,
        fontWeight: '500',
        marginTop: 25,
        
    },
    image: {
        padding: 50,
    },
    coachContainer: {
        padding: 10,
        top: 10,
        marginBottom: 10,
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 0.5,
        borderColor: '#D11A38',
        marginLeft: 50,
    },
    coachName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#595959',
    },
    coachdiscription: {
        fontSize: 14,
        fontWeight: '300',
        color: '#D11A38',
    },
})

export default MyTeam;