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
import Logout from './components/logout/logout';
import PushNotification from 'react-native-push-notification'

PushNotification.configure({
    onRegister: function(token) {
      fetch('http://10.0.2.2:3000/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(token)
      })
    },

    onNotification: function(notification) {
      if(!notification.foreground) return;
        
      PushNotification.localNotification({
          title: notification.title,
          message: notification.time
      });
    },
    
    senderID: "1096237688973",
});

const RootStack = StackNavigator({
  Login: {
    screen: Login,
  },
  Welcome: {
    screen: Welcome,
  },
  Logout: {
    screen: Logout,
  },
    
  } , 
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default class App extends React.Component {
  
  render() { 
    return <RootStack />;
  }
}