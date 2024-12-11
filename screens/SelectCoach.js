import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const SelectCoach = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/frame30.png')} style={styles.frame30} />
            <Text style={styles.line1}>Select Available</Text>
            <Text style={styles.line2}>Coach or Manager</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('DateTime')}>
                <Image source={require('../assets/images/frame53.png')} style={styles.frame53} />
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    frame30: {
        marginTop: 35,
        left: 10,
    },
    line1: {
        textAlign: 'center',
        color: '#D11A38',
        fontSize: 36,
        fontWeight: '600',
        marginTop: 30,
    },
    line2: {
        textAlign: 'center',
        color: '#D11A38',
        fontSize: 36,
        fontWeight: '600',
    },
    frame53: {
        alignSelf: 'center',
        marginTop: 25,
    }
})

export default SelectCoach;