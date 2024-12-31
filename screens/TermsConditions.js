import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ReusableButton from '../components/ReusableButton';

const TermsConditions = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.base}>
                    <Text style={{ color: '#D11A38', fontSize: 28, fontWeight: '600', left: 5 }}>Terms & Conditions</Text>
                    <Text style={{ textAlign: 'justify', margin: 10, color: '#000', fontWeight: '400'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla, urna eu tincidunt
                        congue, nisl nunc egestas dui, vel semper dui metus eu enim.Nullam laoreet libero ac feugiat
                        cursus. Mauris malesuada augue in metus aliquet, at auctor metusconsectetur. Curabitur eget mi
                        vel felis euismod mollis.Lorem ipsum dolor sit amet, consecteturadipiscing elit. Nam fringilla, urna eu tincidunt
                        congue, nisl nunc egestas dui, vel semper dui metus eu enim.Nullam laoreet libero ac feugiat
                        cursus. Mauris malesuada augue in metus aliquet, at auctor metusconsectetur. Curabitur eget mi
                        vel felis euismod mollis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla, urna eu tincidunt
                        congue, nisl nunc egestas dui, vel semper dui metus eu enim.Nullam laoreet libero ac feugiat
                        cursus. Mauris malesuada augue in metus aliquet, at auctor metusconsectetur. Curabitur eget mi
                        vel felis euismod mollis.Lorem ipsum dolor sit amet, consecteturadipiscing elit. Nam fringilla, urna eu tincidunt
                        congue, nisl nunc egestas dui, vel semper dui metus eu enim.Nullam laoreet libero ac feugiat
                        cursus. Mauris malesuada augue in metus aliquet, at auctor metusconsectetur. Curabitur eget mi
                        vel felis euismod mollis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla, urna eu tincidunt
                        congue,Lorem ipsum dolor sit amet.Curabitur eget mi vel felis euismod mollis.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet , </Text>
                    <ReusableButton text="Agree" onPress={() => navigation.navigate('PrivacyPolicy')} />
                </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    base: {
        width: 350,
        height: 810,
        backgroundColor: '#FFE5E9',
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 12,
        marginTop: 40,
        borderColor: '#D11A38',
    },
})

export default TermsConditions;