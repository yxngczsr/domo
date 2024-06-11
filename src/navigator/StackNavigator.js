import { View, Text, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../theme/color';

import Login from '../screens/Login';
import Splash from '../screens/Splash';
import Introduction from '../screens/Introduction';
import Login1 from '../screens/Login1';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Otp from '../screens/Otp';
import Setting from '../screens/Setting';
import VAssis from '../screens/VAssis';
import Profile from '../screens/Profile';
import Report from '../screens/Report';
import Condition from '../screens/Condition';
import Automation from '../screens/Automation';
import MyTabs from './BottomNavigator';
import MHome from '../screens/MHome';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {

  const [showSplashScreen, setshowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowSplashScreen(false);
    }, 4000);


  }, [])
  return (

    <NavigationContainer>

      <Stack.Navigator>
        {
          showSplashScreen ?
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }} />
            : null
        }

        <Stack.Screen
          name="Introduction"
          component={Introduction}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Automation"
          component={Automation}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Condition"
          component={Condition}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Report"
          component={Report}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="MHome"
          component={MHome}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="VAssis"
          component={VAssis}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Login1"
          component={Login1}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>

  )
}