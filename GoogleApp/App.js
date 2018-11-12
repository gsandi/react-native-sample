

import React, { Component } from 'react';
 import {createStackNavigator} from 'react-navigation';
import Login from '/Users/agudala/Projects/GoogleApp/Pages/login.js';
import Logout from '/Users/agudala/Projects/GoogleApp/Pages/logout.js';
import Welcome from '/Users/agudala/Projects/GoogleApp/Pages/welcome.js';




const RootStack = createStackNavigator(
  {
    login: { screen: Login},
    logout : {screen : Logout},
    welcome : {screen : Welcome},
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