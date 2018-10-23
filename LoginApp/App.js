import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation';
import Login from './Screens/LoginScreen';
import Logout from './Screens/LogoutScreen';
import Welcome from './Screens/WelcomePage';

const RootStack = createStackNavigator(
  {
    LoginScreen: { screen: Login},
    LogoutScreen : {screen : Logout},
    WelcomePage : {screen : Welcome},
  }, 
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

export default class App extends Component {
  render() { 
    return <RootStack />;
  }
}