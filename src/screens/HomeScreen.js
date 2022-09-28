import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Video from '../components/Video'
import Carousel from "../components/Carousel"
import { useGetAllCitiesQuery } from '../features/citiesAPI'


export default function HomeScreen() {
    const { data: items } = useGetAllCitiesQuery()

    return (
        <View>
            <Text style={styles.welcome}>Welcome to Mytineraries</Text>
            <Video />
            <Carousel cities={items} />
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