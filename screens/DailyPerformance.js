import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DailyPerformance = () => {
    return (
        <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15 }}>
            <Icon name="chevron-left" size={26} color="gray" />
            <TouchableOpacity>
                <Text style={{ fontSize: 18, color: 'gray' }}>Back</Text>
            </TouchableOpacity>
        </View>
             <Text style={{ fontSize: 34, color: '#D11A38', fontWeight: '500', textAlign: 'center', marginTop: 10 }}>Daily Performance Indicator</Text>
        </SafeAreaView>
    )
}

export default DailyPerformance;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    }
})