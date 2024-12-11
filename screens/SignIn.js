import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput } from 'react-native';

const SignIn = () => {
    // const navigation = useNavigation();

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const saveCredentials = async () => {
    //     try {
    //         if (!email || !password) {
    //             Alert.alert(`Feilds can not be empty.`)
    //             return;
    //         }

    //         await AsyncStorage.setItem(`useremail`, email);
    //         await AsyncStorage.setItem(`userpassword`, password);
    //         Alert.alert(`Credentials saved succefully.`);
    //     } catch (error) {
    //         Alert.alert(`Failed to save data`);
    //     }
    // };

    // const loadCredentials = async () => {
    //     try {
    //         const savedEmail = await AsyncStorage.getItem(`useremail`);
    //         const savedPassword = await AsyncStorage.getItem(`userpassword`);
    //         if (savedEmail) setEmail(savedEmail);
    //         if (savedPassword) setPassword(savedPassword);

    //     } catch (error) {
    //         Alert.alert(`Failed to load data`);
    //     }

    //     useEffect(() => {
    //         loadCredentials();
    //     }, []);
    // };
  const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/frame4.png')} style={styles.frame4} />
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
            <TouchableOpacity onPress={()=>navigation.navigate('ForgetPassword')}>
                <View style={styles.field7}>
                    <Image source={require('../assets/images/frame7.png')} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('OtpPage')}>
                <View style={styles.field8}>
                    <Image source={require('../assets/images/frame8.png')} />
                </View>
            </TouchableOpacity>
            <Text style={styles.ortext}>or</Text>
            <View style={styles.fields9}>
                <Image source={require('../assets/images/frame9.png')} />
            </View>

            <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
            <View style={styles.footertext}>
                <Image source={require('../assets/images/frame1.png')} />
            </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    frame4: {
        alignSelf: 'center',
        marginTop: '20%',
    },

    footertext: {
        marginTop: "12%",
        alignSelf: 'center',
    },
    input: {
        padding: 15,
        borderWidth: 1,
        borderColor: 'lightgray',
        marginLeft: 15,
        marginRight: 15,
    },
    label1: {
        marginTop: 35,
        padding: 12,
        fontSize: 16,
        color: "#000",
    },
    field7: {
        alignSelf: "flex-end",
        padding: 12,
    },
    field8: {
        marginTop: 25,
        alignSelf: 'center',
    },
    fields9: {
        marginTop: 15,
        alignSelf: 'center',
    },
    ortext:{
        textAlign: 'center',
        fontSize: 20,
    },
})

export default SignIn;