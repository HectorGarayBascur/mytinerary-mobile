import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import CitiesScreen from '../screens/CitiesScreen';
import CityScreen from '../screens/CityScreen'
import SignUp from '../screens/SignUp';


const DrawerNavigation = createDrawerNavigator();

export default function Drawer() {
    return (
        <DrawerNavigation.Navigator>
            <DrawerNavigation.Screen name='Home' component={HomeScreen} options={{ headerBackTitleVisible: false }}></DrawerNavigation.Screen>
            <DrawerNavigation.Screen name='Cities' component={CitiesScreen}></DrawerNavigation.Screen>
            <DrawerNavigation.Screen name='City' component={CityScreen}></DrawerNavigation.Screen>
            <DrawerNavigation.Screen name='SignUp' component={SignUp}></DrawerNavigation.Screen>
        </DrawerNavigation.Navigator>
    )
}