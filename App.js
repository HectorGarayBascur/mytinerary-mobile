import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux"
import store from "./src/features/store"
import { View } from 'react-native';
import Drawer from './src/navigation/Drawer';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer></Drawer>
      </NavigationContainer>
    </Provider>
  );
}

