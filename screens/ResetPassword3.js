import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

const ResetPassword3 = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/frame36.png')} style={styles.frame36}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    frame36:{
        position: 'absolute',
        height: '50%',
    },
})
export default ResetPassword3;