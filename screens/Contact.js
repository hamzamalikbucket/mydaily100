import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Contact = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                    <Icon name="chevron-left" size={26} color="gray" />
                    <TouchableOpacity>
                        <Text style={{ fontSize: 18 }}>Back</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}>Contact</Text>
                <View style={styles.box1}>
                    <Text style={styles.querytext}>Have a Query?</Text>
                    <Image source={require('../assets/images/frame64.png')} />
                    <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
                        <Text style={styles.text1}>Contact Us</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.box2}>
                    <Text style={styles.querytext}>Need a Coach?</Text>
                    <Image source={require('../assets/images/frame65.png')} style={styles.image} />
                    <TouchableOpacity onPress={() => navigation.navigate('MyTeam')}>
                        <Text style={styles.text2}>Request a Coach</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Contact;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 34,
        fontWeight: '500',
        textAlign: 'center',
        color: '#D11A38',
        marginTop: 25,
    },
    querytext: {
        marginTop: 25,
        fontSize: 18,
        fontWeight: '500',
        color: '#898989',
    },
    box1: {
        backgroundColor: "#FFE6E6",
        borderRadius: 12,
        marginHorizontal: 15,
        padding: 20,
        alignItems: "center",
        elevation: 5,
        marginTop: 20,

    },
    text1: {
        fontSize: 36,
        fontWeight: '400',
        textAlign: 'center',
        color: '#D11A38',
    },
    box2: {
        backgroundColor: "#FFE6E6",
        borderRadius: 12,
        marginHorizontal: 15,
        padding: 20,
        alignItems: "center",
        elevation: 5,
        marginTop: 20,
    },
    image: {
        alignSelf: 'center',
    },
    text2: {
        fontSize: 36,
        fontWeight: '400',
        textAlign: 'center',
        color: '#D11A38',
    },
})