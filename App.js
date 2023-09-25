import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScene from './Scenes/HomeScene/HomeScene';
import LoginScene from './Scenes/LoginScene/LoginScene.jsx';
import SettingsScene from './Scenes/SettingsScene/SettingsScene.jsx';
import ProfileScene from './Scenes/SettingsScene/ProfileScene';

import { store } from './/State/store.js';
import { Provider } from 'react-redux';

const Tab = createBottomTabNavigator();


export default function App() {



  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={ HomeScene } />
          <Tab.Screen name="Login" component={ LoginScene } />
          <Tab.Screen name="Settings" component={ SettingsScene } />
          {/* <Tab.Screen name="Profile" component={ ProfileScene } 
                      options={{
                        tabBarButton: ()=>null,
                        tabBarVisible: false,
                      }}/> */}
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


