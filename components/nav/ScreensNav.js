// /App.js

import React, { useContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import HomeScreen from '../../screens/HomeScreen';
import LoadingScreen from '../../screens/LoadingScreen';
import LoginScreen from '../../screens/LoginScreen';
import AccountScreen from '../../screens/AccountScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import { AuthContext } from '../../context/Authcontext';
import HeaderTabs from './HeaderTabs';
import PostScreen from '../../screens/PostScreen';
import LinkScreen from '../../screens/LinkScreen';

const Stack = createNativeStackNavigator();

const ScreensNav = () => {
    const { state } = useContext(AuthContext);
    const authenticated = state && state?.token !== "" && state?.token !== null
  return (
    <Stack.Navigator 
    // screenOptions={{ headerShown: false}}
    initialRouteName="Home"
   >
    {authenticated ?
    (
      <>
      <Stack.Screen 
        name="Home"
        options={{
        title: "Food recipe",
        headerRight: () => <HeaderTabs />,
      }}
        component={HomeScreen} />

    <Stack.Screen 
        name="Post"
        options={{
          headerBackTitle: "Back",
        }}
        component={PostScreen} />

    <Stack.Screen 
        name="Links"
        options={{
          headerBackTitle: "Back",
        }}
        component={LinkScreen} />

        <Stack.Screen 
        name="Account"
        options={{
          headerBackTitle: "Back",
        }}
        component={AccountScreen} />
      </>
    ):
    (<>
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{headerShown: false}}  component={SignUpScreen} />
    </>)}
    </Stack.Navigator>
  );
};


export default ScreensNav;