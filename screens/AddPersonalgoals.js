import React from 'react';
import { View, Text, TextInput, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ReusableButton from '../components/ReusableButton';

const AddPersonalgoals = () => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15 }}>
                    <Icon name="chevron-left" size={26} color="gray" />
                    <TouchableOpacity>
                        <Text style={{ fontSize: 18, color: 'gray' }}>Back</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 34, color: '#D11A38', fontWeight: '500', textAlign: 'center', marginTop: 10 }}>Add Personal goals</Text>
                <Text style={{ color: 'gray', left: 12, fontSize: 15, fontWeight: '400', marginTop: 12, }}>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Don joe"
                    placeholderTextColor="#A9A9A9"
                />
                <Text style={{ color: 'gray', left: 12, fontSize: 15, fontWeight: '400', marginTop: 12 }}>Date</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputdate}
                        placeholder="Select a date"
                        placeholderTextColor="#A9A9A9"
                    />
                    <TouchableOpacity>
                        <Icon name="calendar-today" size={24} color="gray" />
                    </TouchableOpacity>
                </View>
                <Text style={{ color: 'gray', left: 12, fontSize: 15, fontWeight: '400', marginTop: 12 }}>Total Points</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.totalGoal}
                        placeholder="0"
                        placeholderTextColor="#A9A9A9"
                        keyboardType="numeric"
                    />
                    <Text>Goal: 100</Text>
                </View>
                <Text style={{ marginHorizontal: 12, color: 'gray', fontSize: 16, fontWeight: '400', }}>What’s Important Now ( W.I.N ). List 3 things professionally are most important to get completed today?</Text>

                <Text style={{ color: '#D11A38', left: 12, fontSize: 18, fontWeight: '600', marginTop: 12 }}>W</Text>
                <TextInput
                    style={styles.input}
                    placeholder="I want to"
                    placeholderTextColor="#A9A9A9"
                />
                <Text style={{ color: '#D11A38', left: 12, fontSize: 18, fontWeight: '600' }}>I</Text>
                <TextInput
                    style={styles.input}
                    placeholder="I want to"
                    placeholderTextColor="#A9A9A9"
                />
                <Text style={{ color: '#D11A38', left: 12, fontSize: 18, fontWeight: '600' }}>N</Text>
                <TextInput
                    style={styles.input}
                    placeholder="I want to"
                    placeholderTextColor="#A9A9A9"
                />
                <ReusableButton text="Next" onPress={() => { }} />
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    input: {
        borderWidth: 1,
        borderColor: '#898989',
        borderRadius: 12,
        paddingHorizontal: 8,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    inputdate: {
        flex: 1,
        fontSize: 16,
        color: "#898989",
    },
    totalGoal: {
        flex: 1,
        fontSize: 16,
        color: "#898989",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#898989",
        borderRadius: 12,
        paddingHorizontal: 8,
        marginVertical: 10,
        marginHorizontal: 10,
    },
});

export default AddPersonalgoals;
