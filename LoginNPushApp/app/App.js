import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import OneSignal from 'react-native-onesignal';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

// Navigation routing- Initial page Login
const RootStack = StackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Login'
  }
);

export default class App extends Component {
// Configuration for push notification service
  componentDidMount() {
    OneSignal.configure({});
  }

  render() {
    return <RootStack />;
  }
}
