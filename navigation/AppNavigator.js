import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ChatListScreen from '../screens/ChatListScreen';
import ChatSettingsScreen from '../screens/ChatSettingsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';





const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const AppNavigator = (props)=>{

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={TabNavigator}  options={{headerShown: false}}/>
                <Stack.Screen name='chatScreenSettings' component={ChatSettingsScreen} options={{
                    headerTitle: "Settings",
                    headerBackTitle: "Back"
                }} />
            </Stack.Navigator>
      </NavigationContainer>
        
    )
}

const TabNavigator = ()=>{
  return(
    <Tab.Navigator screenOptions={{headerTitle: ''}}>
      <Tab.Screen name='Chat' component={ChatListScreen} options={{
        tabBarLabel: "Chats",
        tabBarIcon : ()=> (<Ionicons name="chatbox" size={24} color="#2A3990"  />)
        
        }}/>
      <Tab.Screen name='Settings' component={SettingsScreen} options={{
        tabBarLabel: "Settings",
        tabBarIcon : ()=> (<Ionicons name="settings" size={24} color="#2A3990" />)
       
        }} />
    </Tab.Navigator>
  )
}

export default AppNavigator;
