

import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation';
import Login from '/Users/agudala/Projects/react-native-sample/LoginApp/Screens/LoginScreen.js';
import Logout from '/Users/agudala/Projects/react-native-sample/LoginApp/Screens/LogoutScreen.js';
import Welcome from '/Users/agudala/Projects/react-native-sample/LoginApp/Screens/WelcomePage.js';




const RootStack = createStackNavigator(
  {
    LoginScreen: { screen: Login},
    LogoutScreen : {screen : Logout},
    WelcomePage : {screen : Welcome},
  }, 
  {

    headerMode: 'none'
  }
);

export default class App extends Component {
  
  render() { 
    return <RootStack />;
  }
}