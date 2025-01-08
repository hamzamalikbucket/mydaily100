import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import frame77 from '../assets/images/frame77.png';
import frame78 from '../assets/images/frame78.png';
import frame79 from '../assets/images/frame79.png';
import frame80 from '../assets/images/frame80.png';
import frame81 from '../assets/images/frame81.png';
import { useNavigation } from '@react-navigation/native';


const Library = () => {
    const navigation = useNavigation();
    const [SelectedItem, setSelectedItem] = useState('Books')

    const data = [
        { id: 1, image: frame77 },
        { id: 2, image: frame77 },
        { id: 3, image: frame77 },
        { id: 4, image: frame77 },
        { id: 5, image: frame77 },
        { id: 6, image: frame77 },

    ];

    const renderItem = ({ item }) => {
        return (
            <View>
                <Image source={item.image} />
                <Text style={{ color: 'black', fontSize: 16, fontWeight: '700', left: 25, top: -15 }}>Rich Dad Poor Dad</Text>
                <Text style={{ color: '#D11A38', fontSize: 16, fontWeight: '400', left: 25, marginBottom: 12, top: -15 }}>5 mins read</Text>
            </View>
        )
    };
    const data1 = [
        { id: 1, image: frame78, title: "How to make Money", description: "5 mins watch" },
        { id: 2, image: frame79, title: "Making Money Class", description: "5 mins watch" },
        { id: 3, image: frame78, title: "How to make Money", description: "How to make Money" },
        { id: 4, image: frame79, title: "Making Money Class", description: "5 mins watch" },
        { id: 5, image: frame78, title: "How to make Money", description: "How to make Money" },
        { id: 6, image: frame79, title: "Making Money Class", description: "5 mins watch" },
    ];

    const data2 = [
        { id: 1, image: frame80, title: "Hyper Focus", description: "5 mins listen" },
        { id: 2, image: frame81, title: "Psychology Money", description: "5 mins listen" },
        { id: 3, image: frame80, title: "Hyper Focus", description: "5 mins listen" },
        { id: 4, image: frame81, title: "Psychology Money", description: "5 mins listen" },
        { id: 5, image: frame80, title: "Hyper Focus", description: "5 mins listen" },
        { id: 6, image: frame81, title: "Psychology Money", description: "5 mins listen" },
    ];
    const data3 = [
        { id: 1, image: frame80, title: "Hyper Focus", description: "5 mins listen" },
        { id: 2, image: frame81, title: "Psychology Money", description: "5 mins listen" },
        { id: 3, image: frame80, title: "Hyper Focus", description: "5 mins listen" },
        { id: 4, image: frame81, title: "Psychology Money", description: "5 mins listen" },
        { id: 5, image: frame80, title: "Hyper Focus", description: "5 mins listen" },
        { id: 6, image: frame81, title: "Psychology Money", description: "5 mins listen" },
    ];
    const data4 = [
        { id: 1, image: frame80, title: "Hyper Focus", description: "5 mins listen" },
        { id: 2, image: frame81, title: "Psychology Money", description: "5 mins listen" },
        { id: 3, image: frame80, title: "Hyper Focus", description: "5 mins listen" },
        { id: 4, image: frame81, title: "Psychology Money", description: "5 mins listen" },
        { id: 5, image: frame80, title: "Hyper Focus", description: "5 mins listen" },
        { id: 6, image: frame81, title: "Psychology Money", description: "5 mins listen" },
    ];
    const renderItem1 = ({ item }) => {
        return (
            <View>
                <Image source={item.image} />
                <Text style={{ color: 'black', fontSize: 16, fontWeight: '700', left: 25 }}>{item.title}</Text>
                <Text style={{ color: '#D11A38', fontSize: 16, fontWeight: '400', left: 25 }}>{item.description}</Text>
            </View>
        )
    };
    const renderItem2 = ({ item }) => {
        return (
            <View>
                <Image source={item.image} />
                <Text style={{ color: 'black', fontSize: 16, fontWeight: '700', left: 25 }}>{item.title}</Text>
                <Text style={{ color: '#D11A38', fontSize: 16, fontWeight: '400', left: 25 }}>{item.description}</Text>
            </View>
        )
    };
    const renderItem3 = ({ item }) => {
        return (
            <View>
                <Image source={item.image} />
                <Text style={{ color: 'black', fontSize: 16, fontWeight: '700', left: 25 }}>{item.title}</Text>
                <Text style={{ color: '#D11A38', fontSize: 16, fontWeight: '400', left: 25 }}>{item.description}</Text>
            </View>
        )
    };
    const renderItem4 = ({ item }) => {
        return (
            <View>
                <Image source={item.image} />
                <Text style={{ color: 'black', fontSize: 16, fontWeight: '700', left: 25 }}>{item.title}</Text>
                <Text style={{ color: '#D11A38', fontSize: 16, fontWeight: '400', left: 25 }}>{item.description}</Text>
            </View>
        )
    };
    const items = [

        { label: "Books", screen: "BooksScreen" },
        { label: "Videos", screen: "VideosScreen" },
        { label: "Audios", screen: "AudiosScreen" },
        { label: "PDFs", screen: "PDFsScreen" },
        { label: "Link to other content", screen: "Link to other contentScreen" },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="chevron-left" size={26} color="gray" />
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={{ fontSize: 18 }}>Back</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Icon name="search" size={28} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.title}>Libray</Text>

                <ScrollView
                    horizontal
                    contentContainerStyle={styles.scrollContainer}>
                    {items.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={
                                [styles.item,
                                SelectedItem === item.label &&
                                styles.selecteditem,
                                ]}
                            onPress={() => setSelectedItem(item.label)} >
                            <Text style={styles.text}>{item.label}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View style={styles.pagetitle}>
                    <Text style={{ fontSize: 20, fontWeight: '600' }}>{SelectedItem}</Text>
                    <Icon name="filter-list" size={30} color="#D11A38" />
                </View>
                {
                    SelectedItem === 'Books' &&
                    <FlatList data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2} />
                }

                {SelectedItem === 'Videos' &&
                    <FlatList
                        data={data1}
                        renderItem={renderItem1}
                        keyExtractor={(item) => item.id}
                        numColumns={2} />
                }
                {SelectedItem === 'Audios' &&
                    <FlatList
                        data={data2}
                        renderItem={renderItem2}
                        keyExtractor={(item) => item.id}
                        numColumns={2} />
                }
                {SelectedItem === 'PDFs' &&
                    <FlatList
                        data={data3}
                        renderItem={renderItem3}
                        keyExtractor={(item) => item.id}
                        numColumns={2} />
                }
                {SelectedItem === 'Link to other content' &&
                    <FlatList
                        data={data4}
                        renderItem={renderItem4}
                        keyExtractor={(item) => item.id}
                        numColumns={2} />
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default Library;

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
        textAlign: 'center',
        fontWeight: '600',
    },
    scrollContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    selecteditem: {
        backgroundColor: '#ffd3d9',
    },
    item: {
        margin: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 12,
        borderColor: '#ccc',
        borderWidth: 0.5,
    },
    text: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
    },
    pagetitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        marginTop: 15,
    },

})