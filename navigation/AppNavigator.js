import React from 'react';
import { View } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

import MainTabNAvigator from './MainTabNavigator';
import AuthLoadingScreen from '../screens/auth/AuthLoadingScreen';
import SignInScreen from '../screens/auth/SignInScreen';
import DrawerScreen from '../screens/DrawerScreen';

const AuthStack = createStackNavigator({ SignIn: SignInScreen });
const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MainTabNAvigator,
  }
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: MyDrawerNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));