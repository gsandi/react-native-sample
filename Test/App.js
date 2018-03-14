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
import PushNotification from 'react-native-push-notification'
// const token = {
//   token: null
// }
PushNotification.configure({

    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function(token) {
        console.log( 'TOKEN:', token );
        // token.token = token;
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
        setTimeout(() => {
          if(!notification['foreground']) {
            ToastAndroid.show('you have clicked', ToastAndroid.SHORT)
          }
        }, 1)
       
        PushNotification.localNotificationSchedule({
          title: "this is the title",
          message: notification['name'], // (required)
          date: new Date(Date.now())
        });
    },
    senderID: "1096237688973",

});





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