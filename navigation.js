 // /App.js

import React from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';

// Screens
import ScreensNav from './components/nav/ScreensNav';
import { AuthContextProvider } from './context/Authcontext';

const RootNavigation = () => {

  return (
      <AuthContextProvider>
        <NavigationContainer>
         <ScreensNav />
        </NavigationContainer>
      </AuthContextProvider>
  );
};


export default RootNavigation;