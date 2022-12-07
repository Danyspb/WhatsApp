import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatListScreen from '../screens/ChatListScreen';
import ChatSettingsScreen from '../screens/ChatSettingsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';
import ChatScreen from '../screens/ChatScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



const MainNavigator = (props)=>{


    return(
        <Stack.Navigator>
                <Stack.Screen name='Home' component={TabNavigator}  options={{headerShown: false}}/>
                <Stack.Screen name='chatScreenSettings' component={ChatSettingsScreen} options={{
                    headerTitle: "Settings",
                    headerBackTitle: "Back"
                }} />
                <Stack.Screen name='ChatS' component={ChatScreen} options={{
                    headerBackTitle: "Back",
                    headerShown: false,
                }} />
        </Stack.Navigator>
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

export default MainNavigator;