import { StyleSheet, View } from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import MainPage from './MainPage';
import SuccessChart from './SuccessChart';
import DailyTarget from './DailyTarget';
import Goals from './Goals';

const SwiperScreen = () => {
    return (
        <View style={styles.container}>
            <Swiper loop= {false}>
                <MainPage />
                <SuccessChart />
                <DailyTarget/>
                <Goals/>
            </Swiper>
        </View>
    )
}
export default SwiperScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})