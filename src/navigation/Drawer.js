import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import CitiesScreen from '../screens/CitiesScreen';
import CityScreen from '../screens/CityScreen'
import SignUp from '../screens/SignUp';
import SignInScreen from '../screens/SignInScreen';
import ActivitiesScree from '../screens/ActivitiesScree';
import Itineraries from '../screens/Itineraries';

const DrawerNavigation = createDrawerNavigator();

export default function Drawer() {
    return (
        <DrawerNavigation.Navigator>
            <DrawerNavigation.Screen name='Home' component={HomeScreen} options={{ headerBackTitleVisible: false }}></DrawerNavigation.Screen>
            <DrawerNavigation.Screen name='Cities' component={CitiesScreen}></DrawerNavigation.Screen>
            <DrawerNavigation.Screen name='SignUp' component={SignUp}></DrawerNavigation.Screen>
            <DrawerNavigation.Screen name='City' component={CityScreen}></DrawerNavigation.Screen> 
            <DrawerNavigation.Screen name='Sign In' component={SignInScreen}></DrawerNavigation.Screen>
            <DrawerNavigation.Screen name='Itineraries' component={Itineraries}></DrawerNavigation.Screen>
            <DrawerNavigation.Screen name='Activities' component={ActivitiesScree}></DrawerNavigation.Screen>
        </DrawerNavigation.Navigator>
    )
}