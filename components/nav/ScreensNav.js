/* eslint-disable react/no-unstable-nested-components */
// /App.js

import React, { useContext } from 'react';

// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from '../../screens/HomeScreen';
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
  const authenticated = state && state?.token !== '' && state?.token !== null;
  return (
    <Stack.Navigator
    // screenOptions={{ headerShown: false}}
      initialRouteName="Home"
    >
      {authenticated
        ? (
          <>
            <Stack.Screen
              name="Home"
              options={{
                title: 'Food recipe',
                headerRight: () => <HeaderTabs />,
              }}
              component={HomeScreen}
            />

            <Stack.Screen
              name="Post"
              options={{
                headerBackTitle: 'Back',
              }}
              component={PostScreen}
            />

            <Stack.Screen
              name="Links"
              options={{
                headerBackTitle: 'Back',
              }}
              component={LinkScreen}
            />

            <Stack.Screen
              name="Account"
              options={{
                headerBackTitle: 'Back',
              }}
              component={AccountScreen}
            />
          </>
        )
        : (
          <>
            <Stack.Screen name="SignIn" options={{ headerShown: false }} component={LoginScreen} />
            <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUpScreen} />
          </>
        )}
    </Stack.Navigator>
  );
};

export default ScreensNav;
