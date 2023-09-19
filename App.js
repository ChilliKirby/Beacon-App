import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScene from './Scenes/HomeScene/HomeScene';

const Tab = createBottomTabNavigator();


export default function App() {

  

  return (
  //   <View style={styles.mainContainer}>
  //     <Text style={styles.textInfo}>ghjhj</Text>
  //     <Text style={styles.textInfo}>ghjhj</Text>
  //     <Text style={styles.textInfo}>ghjhj</Text>
  //     <Text style={styles.textInfo}>ghjg</Text>
  //     {/* <MapView style={styles.mapContainer} provider={PROVIDER_GOOGLE}/> */}
  //     <MapView
  //     style={{width:400,height:200}}
  //     provider={PROVIDER_GOOGLE}
  //     ></MapView>
  //   </View>
  <NavigationContainer>
  <Tab.Navigator>
  <Tab.Screen name="Home" component={HomeScene} />
    </Tab.Navigator>
  </NavigationContainer>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
