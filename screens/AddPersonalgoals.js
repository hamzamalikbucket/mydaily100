import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For the calendar icon

const AddPersonalgoals = () => {
    const [date, setDate] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (selectedDate) => {
        const formattedDate = `${selectedDate.getDate()}-${selectedDate.getMonth() + 1}-${selectedDate.getFullYear()}`;
        setDate(formattedDate);
        hideDatePicker();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Date</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={date}
                    placeholder="Select a date"
                    placeholderTextColor="#A9A9A9"
                    editable={false} // Prevent manual text input
                />
                <TouchableOpacity onPress={showDatePicker}>
                    <Icon name="calendar-today" size={24} color="gray" />
                </TouchableOpacity>
            </View>
            <DateTimePicker
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#000',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#000',
    },
});

export default AddPersonalgoals;
