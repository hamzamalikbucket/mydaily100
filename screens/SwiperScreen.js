import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Swiper from 'react-native-swiper';
import MainPage from './MainPage';
import SuccessChart from './SuccessChart';
import DailyTarget from './DailyTarget';
import Goals from './Goals';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const SwiperScreen = () => {
    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    return (
        <View style={styles.container}>
            <Swiper loop={false}
                showsPagination={true}
                activeDotStyle={styles.activedot}
                dotStyle={styles.dot}
                index={index}
                onIndexChanged={(ind) => setIndex(ind)} >
                <MainPage />
                <SuccessChart />
                <DailyTarget />
                <Goals />
            </Swiper>
            <View style={{ height: 120 }} >
                <TouchableOpacity style={{
                    backgroundColor: '#D11A38',
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    position: 'absolute',
                    bottom: 40,
                    right: 20,
                }} onPress={() => {
                    if (index < 4) {
                        setIndex(index + 1);
                    } else {
                        navigation.navigate('SignIn');
                    }
                }}>
                    <Icon name="arrow-forward" size={32} color="#fff" />
                </TouchableOpacity>

                {index != 0 && <TouchableOpacity style={{
                    width: 32,
                    height: 32,
                    position: 'absolute',
                    bottom: 40,
                    left: 20,
                }} onPress={() => { if (index > 0) setIndex(index - 1) }}>
                    <Icon name="arrow-back" size={32} color="#D11A38" />
                </TouchableOpacity>}
            </View>
        </View>
    )
}
export default SwiperScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 5,
    },
    activedot: {
        backgroundColor: '#D11A38',
        width: 24,
        height: 8,
        borderRadius: 100,
    },
})