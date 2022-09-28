import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, FlatList } from 'react-native';
// import { safeAreaView } from 'react-native-safe-area-context'
// import { safeAreaView } from 'react-native'

export default function Index() {
    return (
        <View style={styles.container}>
            <Text>Grande el Tomy y la ESTEFITA</Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});