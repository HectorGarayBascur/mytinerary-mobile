import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import CitiesScreen from '../screens/CitiesScreen';


const DrawerNavigation = createDrawerNavigator();

export default function Drawer() {
    return (
        <DrawerNavigation.Navigator>
            <DrawerNavigation.Screen name='Home' component={HomeScreen}></DrawerNavigation.Screen>
            <DrawerNavigation.Screen name='Cities' component={CitiesScreen}></DrawerNavigation.Screen>
        </DrawerNavigation.Navigator>
    )
}