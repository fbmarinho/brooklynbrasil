import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from "@expo/vector-icons/Ionicons";

import AuthLoadingScreen from '../screens/auth/AuthLoadingScreen';
import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import MenuLateral from '../screens/MenuLateral';
import Avisos from '../screens/Avisos';
import Horarios from '../screens/Horarios';
import AppStyles from '../styles/AppStyles';

// Cria tab navigator
const TabNavigator = createBottomTabNavigator({
  Avisos,
  Horarios
}, {
    navigationOptions: ({ navigation }) => {
      console.log(navigation);
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      }
    },
    tabBarOptions: {
      style: AppStyles.tabBar
    }
  }
);


// Stack para conter as tabs
const StackTabNavigator = createStackNavigator({ Tabs: TabNavigator }, {
  defaultNavigationOptions: ({ navigation }) => {
    return {
      headerLeft: <Icon name="md-menu" size={30} style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} />,
      headerStyle: AppStyles.header,
      headerTitleStyle: AppStyles.headerTitle
    }
  }
});

// Telas de login
const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen
});

// Adiciona um menu lateral
const AppDrawerNavigator = createDrawerNavigator({
  Home: { screen: StackTabNavigator },
}, {
    contentComponent: MenuLateral
  });

// Troca entre o app e as telas de login
const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppDrawerNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default createAppContainer(SwitchNavigator);