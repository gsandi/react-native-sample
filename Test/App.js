import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import  {StackNavigator} from 'react-navigation';
import Login from './components/login/Login';
import Welcome from './components/welcome/Welcome';

const RootStack = StackNavigator(
  {
    Login: {
      screen: Login,
    },
    Welcome: {
      screen: Welcome,
    },
  }
);

export default class App extends React.Component {
  
  render() { 
    return <RootStack />;
  }
}