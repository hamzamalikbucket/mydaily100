import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';

const DateTime = () => {
  const navigation = useNavigation();
  const [SelectedDate, setSelectedDate] = useState('');
  const times = [
    '1:00 pm',
    '4:00 pm',
    '8:00 pm',
    '10:00 am',
    '9:00 am',
    '11:00 pm',
    '5:00 pm',
    '8:00 pm',
    '2:00 pm',
  ];
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.navigate('PaymentDetails')}>
        <Image source={require('../assets/images/frame30.png')} style={styles.frame30} />
      </TouchableOpacity>
      <Text style={styles.line1}>Select</Text>
      <Text style={styles.line2}>Date & Time</Text>
      <Text style={styles.line3}>Select Date:</Text>
      <View style={styles.CalendarContainer}>
        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{
            [SelectedDate]: {
              selected: true,
              selectedColor: 'red',
            },
          }}
          theme={{
            arrowColor: 'red',
            todayTextColor: '#D11A38',
            selectedDayBackgroundColor: 'red',
            textSectionTitleColor: '#D11A38',
          }}
        />
      </View>
      <Text style={styles.line4}>Select Time:</Text>
      <View style={styles.rowContainer}>
        {times.map((time, index) => (
          <TouchableOpacity key={index} style={styles.timeBox}>
            <Text style={styles.timeText}>{time}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default DateTime;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  frame30: {
    marginTop: 35,
    left: 15,
  },
  line1: {
    textAlign: 'center',
    color: '#D11A38',
    fontSize: 36,
    fontWeight: '600',
    marginTop: 25,
  },
  line2: {
    textAlign: 'center',
    color: '#D11A38',
    fontSize: 36,
    fontWeight: '600',
  },
  line3: {
    marginTop: '15%',
    left: 15,
    fontWeight: '600',
    fontSize: 20,
  },
  line4: {
    marginTop: '18%',
    marginBottom: 15,
    left: 15,
    fontWeight: '600',
    fontSize: 20,
  },
  CalendarContainer: {
    marginTop: 25,
  },
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  timeBox: {
    backgroundColor: '#fce4ec',
    borderRadius: 12,
    width: '30%',
    padding: 15,
    marginBottom: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  timeText: {
    fontSize: 16,
    color: '#D11A38',
    fontWeight: '600',
  },
})