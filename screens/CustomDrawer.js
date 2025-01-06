import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';


// const CustomDrawer = ({ navigation }) => {
//     return (
//         <View style={styles.container}>
//             {/* <Text>CustomDrawer</Text> */}
//             <Image source={require('../assets/images/frame41.png')} style={styles.frame41} />
//             <Text style={styles.title}>Mary Linton</Text>
//             <TouchableOpacity onPress={()=> navigation.navigate('ProfilePage')}>
//                 <Text style={styles.subtitle}>Edit Profile</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//                 style={styles.item}
//                 onPress={() => navigation.navigate("YourGoals")}>
//                 <Text>YourGoals</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//                 style={styles.item}
//                 onPress={() =>
//                     navigation.navigate("Journal")}>
//                 <Text>journal</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//                 style={styles.item}
//                 onPress={() =>
//                     navigation.navigate("Journal1")}>
//                 <Text>journal1</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//                 style={styles.item}
//                 onPress={() =>
//                     navigation.navigate("ProfilePage")}>
//                 <Text>ProfilePage</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }
// export default CustomDrawer;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
//     item: {
//         padding: 10,
//         marginVertical: 5,
//         borderRadius: 12,
//         borderBottomWidth: 0.5,
//         // backgroundColor: '#ddd',
//         marginRight: 15,
//     },
//     frame41: {
//         alignSelf: 'center',
//     },
//     title: {
//         fontSize: 22,
//         color: '#D11A38',
//         fontWeight: '500',
//         textAlign: 'center',
//     },
//     subtitle: {
//         fontSize: 18,
//         color: 'gray',
//         fontWeight: '300',
//         textAlign: 'center',
//     },
// })
const CustomDrawer = ({ navigation }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image source={require('../assets/images/frame41.png')} style={styles.frame41} />
                <Text style={styles.title}>Mary Linton</Text>
                <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}>
                    <Text style={styles.subtitle}>Edit Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.item, activeIndex === 0 ? styles.activeItem : null]}
                    onPress={() => {
                        setActiveIndex(0);
                        navigation.navigate('YourGoals')
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', right: 5 }}>
                    <Icon name="language" size={22} color={activeIndex === 0 ? '#D11A38' : 'gray'} />

                    <Text style={activeIndex === 0 ? styles.activeText : styles.inactiveText}>Your Goals</Text></View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.item, activeIndex === 1 ? styles.activeItem : null]}
                    onPress={() => {
                        setActiveIndex(1);
                        navigation.navigate('Journal')
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', right: 5 }}>
                    <Icon name="folder" size={22} color={activeIndex === 1 ? '#D11A38' : 'gray'} />
                    <Text style={activeIndex === 1 ? styles.activeText : styles.inactiveText}>Journal</Text></View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.item, activeIndex === 2 ? styles.activeItem : null]}
                    onPress={() => {
                        setActiveIndex(2);
                        navigation.navigate('Journal1')
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', right: 5 }}>
                        <Icon name="folder" size={22} color={activeIndex === 2 ? '#D11A38' : 'gray'} />
                        <Text style={activeIndex === 2 ? styles.activeText : styles.inactiveText}>Journal1</Text></View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.item, activeIndex === 3 ? styles.activeItem : null]}
                    onPress={() => {
                        setActiveIndex(3);
                        navigation.navigate('ProfilePage')
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', right: 5 }}>
                        <Icon name="person" size={22} color={activeIndex === 3 ? '#D11A38' : 'gray'} />
                        <Text style={activeIndex === 3 ? styles.activeText : styles.inactiveText}>Profile Page</Text></View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.item, activeIndex === 4 ? styles.activeItem : null]}
                    onPress={() => {
                        setActiveIndex(4);
                        navigation.navigate('MyTeam')
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', right: 5 }}>
                        <Icon name="group" size={22} color={activeIndex === 4 ? '#D11A38' : 'gray'} />
                        <Text style={activeIndex === 4 ? styles.activeText : styles.inactiveText}>My Team</Text></View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.item, activeIndex === 5 ? styles.activeItem : null]}
                    onPress={() => {
                        setActiveIndex(5);
                        navigation.navigate('TermsConditions')
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', right: 5 }}>
                        <Icon name="receipt" size={22} color={activeIndex === 5 ? '#D11A38' : 'gray'} />
                        <Text style={activeIndex === 5 ? styles.activeText : styles.inactiveText}>Terms and Conditions</Text></View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.item, activeIndex === 6 ? styles.activeItem : null]}
                    onPress={() => {
                        setActiveIndex(6);
                        navigation.navigate('PrivacyPolicy')
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', right: 5 }}>
                        <Icon name="shield" size={22} color={activeIndex === 6 ? '#D11A38' : 'gray'} />
                        <Text style={activeIndex === 6 ? styles.activeText : styles.inactiveText}>Privacy Policy</Text></View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView >
    );
};

export default CustomDrawer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    item: {
        padding: 10,
        marginVertical: 5,
        borderRadius: 12,
        borderBottomWidth: 0.5,
        backgroundColor: '#f0f0f0',
    },
    activeItem: {
        backgroundColor: '#f0f0f0',
    },
    frame41: {
        alignSelf: 'center',
    },
    title: {
        fontSize: 22,
        color: '#D11A38',
        fontWeight: '500',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        color: 'gray',
        fontWeight: '300',
        textAlign: 'center',
    },
    activeText: {
        color: '#D11A38',
        fontSize: 20,
        fontWeight: '500',
        left: 5,
    },
    inactiveText: {
        color: '#333',
        fontSize: 20,
        fontWeight: '300',
        left: 5,
    },
});
