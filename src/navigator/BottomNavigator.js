import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../screens/Home';
import { Colors } from '../theme/color';

import Automation from '../screens/Automation';
import Setting from '../screens/Setting';
import Report from '../screens/Report';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Condition from '../screens/Condition';
import MHome from '../screens/MHome';


const Tab = createBottomTabNavigator();

export default function MyTabs() {

  return (
    <Tab.Navigator
      screenOptions={{
        // BottomTabBarHeight:30,
        tabBarStyle: { position: 'absolute', height: 70,  backgroundColor: Colors.secondary,  },
        tabBarShowLabel: false,
      }}>

      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: ({ focused, color, }) => (
            <Text style={{ color: focused ? Colors.primary : Colors.disable, }}>Home</Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return <Image source={require('../../assets/image/home.png')} resizeMode='stretch'
              style={{ height: 26, width: 26, tintColor: focused ? Colors.primary : Colors.active }} />
          },
          headerShown: false,
        }}
      />

      <Tab.Screen name="Automation" component={Automation}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: ({ focused, color, }) => (
            <Text style={{ color: focused ? Colors.primary : Colors.disable, }}>Automation</Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return <Image source={require('../../assets/image/thermometer-half.png') } resizeMode='stretch'
              style={{ height: 26, width: 26, tintColor: focused ? Colors.primary : Colors.active }} />
          },
          headerShown: false,
        }} />

      <Tab.Screen name="Report" component={Report}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: ({ focused, color, }) => (
            <Text style={{ color: focused ? Colors.primary : Colors.disable, }}>Report</Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return <Image source={require('../../assets/image/light.png') } resizeMode='stretch'
              style={{ height: 26, width: 26 , tintColor: focused ? Colors.primary : Colors.active}} />
          },
          headerShown: false,
        }} />


      <Tab.Screen name="Profile" component={Profile}
              options={{
                tabBarShowLabel: false,
                tabBarLabel: ({ focused, color, }) => (
                  <Text style={{ color: focused ? Colors.primary : Colors.disable, }}>Setting</Text>
                ),
                tabBarIcon: ({ focused, color }) => {
                  return <Image source={require('../../assets/image/user.png')} resizeMode='stretch'
                    style={{ height: 26, width: 26, tintColor: focused ? Colors.primary : Colors.active }} />
                },
                headerShown: false,
              }} />


    </Tab.Navigator>
  );
}


