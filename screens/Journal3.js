import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MenuProvider } from 'react-native-popup-menu';
import { Menu, MenuOptions, MenuOption, MenuTrigger, } from 'react-native-popup-menu';
import frame74 from '../assets/images/frame74.png';

const Journal3 = () => {
    const item = [
        { id: 1, image: frame74 },
        { id: 2, image: frame74 },
        { id: 3, image: frame74 },
        { id: 4, image: frame74 },
     
    ];

    const renderItem = ({ item }) => {
        return (
            <Image source={item.image} />
        )
    };


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="chevron-left" size={26} color="gray" />
                        <TouchableOpacity>
                            <Text style={{ fontSize: 18 }}>Back</Text>
                        </TouchableOpacity>
                    </View>
                <Menu>
                <MenuTrigger text='Edit' style={{right: 15}}/>
                    <MenuOptions>
                        <MenuOption onSelect={() => alert(`Edit`)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="edit" size={20} color="#D11A38" />
                        <Text style={{ color: '#D11A38' }}>Edit</Text>
                        </MenuOption>

                        <MenuOption onSelect={() => alert(`Delete`)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="delete" size={20} color="#D11A38" />
                            <Text style={{ color: '#D11A38' }}>Delete</Text>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
                </View>
            
                <Text style={styles.title}>journal Name</Text>
                <Text style={styles.subtitle}>My journal </Text>
                <Text style={{ margin: 30, fontSize: 18 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptat</Text>
                <Text style={{ fontSize: 32, fontWeight: '700', margin: 10 }}>Attachments</Text>
                <FlatList
                    data={item}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default () => (
    <MenuProvider>
        <Journal3 />
    </MenuProvider>
)

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
        left: 15,
        top: 15,
    },
    subtitle: {
        fontSize: 28,
        fontWeight: '600',
        left: 15,
        top: 25,
    },
})