import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScene from './Scenes/HomeScene/HomeScene';
import LoginScene from './Scenes/LoginScene/LoginScene.jsx';
import SettingsScene from './Scenes/SettingsScene/SettingsScene.jsx';
import ProfileScene from './Scenes/SettingsScene/ProfileScene';
import EditNameScene from './Scenes/SettingsScene/EditNameScene';
import EditImageScene from './Scenes/SettingsScene/EditImageScene';
import SearchFriend from './Scenes/SettingsScene/SearchFriend';
import ViewProfileScene from './Scenes/ViewProfileScene/ViewProfileScene';
import FriendRequest from './Scenes/SettingsScene/FriendRequest';
import CreateTask from './Scenes/CreatePost/CreatePostScene';

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
          <Tab.Screen name="Profile" component={ ProfileScene } 
                      options={{
                        tabBarButton: ()=>null,
                        tabBarVisible: false,
                        //unmountOnBlur: true,
                      }}
                      // listeners={({navigation}) => ({
                      //   blur: () => navigation.setParams({ screen: undefined })
                      // })}
          />
          <Tab.Screen name="Edit Name" component={EditNameScene}
                      options={{
                        tabBarButton: ()=>null,
                        tabBarVisible: false,
                      }}
          />
          <Tab.Screen name="Edit Image" component={EditImageScene}
                      options={{
                        tabBarButton: ()=>null,
                        tabBarVisible: false,
                      }}
          />
          <Tab.Screen name="Friend Search" component={SearchFriend}
                      
          />
          <Tab.Screen name="View Profile" component={ViewProfileScene}
              
          />
          <Tab.Screen name="Friend Requests" component={FriendRequest}

          />
          <Tab.Screen name="Create Task" component={ CreateTask }
          />

        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


