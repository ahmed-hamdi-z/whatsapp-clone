import React from 'react'

import ChatSettingScreen from "../screens/ChatSettingScreen";
import ChatListScreen from "../screens/ChatListScreen";
import SettingScreen from "../screens/SettingScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";



import { Ionicons } from "@expo/vector-icons";
import ChatScreen from '../screens/ChatScreen';



const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => { 
    return (
      <Tab.Navigator barStyle={{ backgroundColor: "white", color: "#fff" }}>
        <Tab.Screen
          name="Chat List"
          component={ChatListScreen}
          options={{
            tabBarLabel: "Chats",
            tabBarAccessibilityLabel: "none",
            tabBarIcon: ({ color }) => {
              return (
                <Ionicons
                  name="md-chatbox-ellipses-sharp"
                  size={24}
                  color={color}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Setting Screen"
          component={SettingScreen}
          options={{
            tabBarLabel: "Setting",
  
            tabBarIcon: ({ color }) => {
              return (
                <Ionicons
                  name="settings-sharp"
                  options={{}}
                  size={24}
                  color={color}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  };
const MainNavigator = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={TabNavigator}
      options={{
        headerShown: false,
      }}
    />
     <Stack.Screen
      name="ChatScreen"
      component={ ChatScreen }
      options={{
        headerTitle: '',
     
      }}
    />
    <Stack.Screen
      name="ChatSettingScreen"
      component={ChatSettingScreen}
      options={{
        title: "Settings",
      }}
    />
  </Stack.Navigator>
  )
}

export default MainNavigator