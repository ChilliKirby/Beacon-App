import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScene from './Scenes/HomeScene/HomeScene';

const Tab = createBottomTabNavigator();


export default function App() {



  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScene} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


