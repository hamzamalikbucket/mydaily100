
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const DailyTarget = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            {/* <ScrollView > */}
                <TouchableOpacity onPress={() => navigation.navigate('Goals')}>
                    <Text style={styles.text}>Skip</Text>
                </TouchableOpacity>

                <Image source={require('../assets/images/img3.png')} style={styles.image3} />
                <Text style={styles.line1}>Stay on</Text>
                <Text style={styles.line2}>Target Daily</Text>
                <Text style={styles.discription}>Maintain focus, adapt, and conquer
                    daily challenges. My Daily 100: Your
                    guide to <Text style={styles.progress}>Unstoppable Progress</Text>
                </Text>
                <View style={styles.icons}>
                    <TouchableOpacity onPress={() => navigation.navigate('SuccessChart')}>
                        <Icon name="arrow-back" size={32} color="#D11A38" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Goals')}>
                        <Icon name="arrow-forward" size={32} color="#fff"
                            style={styles.iconStyle} />
                    </TouchableOpacity>
                </View>
            {/* </ScrollView> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    text: {
        color: '#D11A38',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 30,
    },
    image3: {
        alignSelf: 'center',
        width: 298,
        height: 293,
        marginTop: 50,
    },
    line1: {
        fontSize: 34,
        color: '#000',
        fontWeight: '400',
        textAlign: 'center',
        marginTop: '10%',
    },
    line2: {
        fontSize: 34,
        fontWeight: '500',
        color: '#D11A38',
        textAlign: 'center',
    },
    discription: {
        fontSize: 15,
        fontWeight: '400',
        textAlign: 'center',
        marginTop: '5%',
        marginLeft: 10,
        marginRight: 10,
    },
    progress: {
        color: '#D11A38',
    },
    icons: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 160,
    },
    iconStyle: {
        backgroundColor: "#D11A38",
        width: 50,
        height: 50,
        borderRadius: 25,
        padding: 8,
    },
});

export default DailyTarget;