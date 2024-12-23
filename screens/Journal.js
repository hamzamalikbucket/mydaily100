import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Journal = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                <Icon name="chevron-left" size={26} color="gray" />
                <TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>Back</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>Journal</Text>
            <Text style={styles.subtext}>You have 0 journal</Text>
            <TouchableOpacity>
            <Text style={styles.btntext}>Add journal</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Journal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 36,
        fontWeight: '600',
        color: '#D11A38',
        marginTop: 20,
        textAlign: 'center',
    },
    subtext: {
        top: 270,
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 24,
    },
    btntext: {
        width: 353,
        height: 54,
        borderRadius: 12,
        backgroundColor: '#D11A38',
        top: 280,
        alignSelf: 'center',
        padding: 15,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 20,
        color: '#fff',
    },
})