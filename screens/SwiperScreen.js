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
            <Swiper loop={false}
                showsPagination={true}
                activeDotStyle={styles.activedot}
                dotStyle={styles.dot}
            >
                <MainPage />
                <SuccessChart />
                <DailyTarget />
                <Goals />
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
    dot: {
        width: 8,
        height: 8,
        borderRadius: 5,
        marginBottom: 220,
    },
    activedot: {
        backgroundColor: '#D11A38',
        width: 24,
        height: 8,
        borderRadius: 100,
        marginBottom: 220,
    },
})