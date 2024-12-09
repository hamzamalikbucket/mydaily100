import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const SelectCoach = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/frame30.png')} style={styles.frame30} />
            <Text style={styles.line1}>Select Available</Text>
            <Text style={styles.line2}>Coach or Manager</Text>
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
    line1:{
        textAlign: 'center',
        color: '#D11A38',
        fontSize: 36,
        fontWeight: '600',
        marginTop: 30,
    },
    line2:{
        textAlign: 'center',
        color: '#D11A38',
        fontSize: 36,
        fontWeight: '600',
    },
})

export default SelectCoach;