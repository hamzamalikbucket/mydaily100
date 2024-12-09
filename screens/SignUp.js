import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function SignUp() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo} />
            <Image source={require("../assets/images/frame17.png")} style={styles.frame17} />

            <Text style={styles.label1}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="example@email.com"
                // value={email}
                // onChangeText={setEmail}
                keyboardType="email-address"
            />
            <Text style={styles.label1}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="password123"
            // value={password}
            />
            <Text style={styles.label1}>Confirm Password</Text>
            <TextInput
                style={styles.input}
                placeholder="password123"
            // value={password}
            />
            <TouchableOpacity onPress={()=> navigation.navigate('TermsConditions')}>
                <Image source={require("../assets/images/frame18.png")} style={styles.frame18} />
            </TouchableOpacity>

            <Image source={require("../assets/images/frame19.png")} />
            <TouchableOpacity onPress={()=>navigation.navigate('ProfilePage')}>
            <Image source={require("../assets/images/frame20.png")} style={styles.frame20} />
            </TouchableOpacity>
            <Text style={styles.ortext}>or</Text>
            <Image source={require("../assets/images/frame22.png")} />

            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Image source={require("../assets/images/frame21.png")} style={styles.frame21} />
            </TouchableOpacity>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logo: {
        alignSelf: 'center',
        marginTop: '8%',
    },
    frame17: {
        alignSelf: 'center',
        marginTop: "5%",
    },
    label1: {
        marginTop: 25,
        fontSize: 16,
        color: "#000",
        marginLeft: 12,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: 'lightgray',
        marginLeft: 15,
        marginRight: 15,
    },
    frame18: {
        marginTop: 8,
    },
    frame20: {
        alignSelf: "center",
    },
    frame21: {
        alignSelf: 'center',
    },
    ortext: {
        textAlign: 'center',
        fontSize: 20,
    }
})