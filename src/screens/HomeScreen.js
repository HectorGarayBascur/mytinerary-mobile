import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Video from '../components/Video'


export default function HomeScreen() {
    return (
        <View>
            <Text style={styles.welcome}>Welcome to Mytinerari</Text>
            <Video />
        </View>
    )
}

const styles = StyleSheet.create({
    welcome: {
        width: 430,
        height: 50,
        paddingTop: 5,
        textAlign: 'center',
        fontSize: 40,
        color: '#fff',
        backgroundColor: '#73B1BF'
    },
    // container: {
    //     flex: 1,
    //     backgroundColor: 'white',
    // }
})