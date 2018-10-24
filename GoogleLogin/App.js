import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation';

//import Logout from './Components/Logout';
//import Welcome from './Components/Welcome';
//import Greetings from './components/Greetings';



//import configureStore from './src/store/configureStore';
import Login from './Components/Loginscreens/index.js';
import Welcome from './Components/WelcomeScreen/index.js';
import Logout from "/Users/amudamula/reactprojects/react-native-sample/GoogleLogin/Components/Logout/index.js"

const RootStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    Home: {
      screen: Welcome,
      navigationOptions: {
        header: null
      }
    },
    Logout: {
      screen: Logout,
      navigationOptions:{
        header: null
      }
    }
  },
    {
      initialRouteName: 'Login'
    }
   
);
export default class GoogleSigninSampleApp extends Component {
 
  render() {
    return <RootStack />   
  }
}