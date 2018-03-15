import React from 'react';
import {StackNavigator} from 'react-navigation';
import Login from './components/login/Login';
import Welcome from './components/welcome/Welcome';
import Logout from './components/logout/logout';

const RootStack = StackNavigator(
  {
    Login: { screen: Login },
    Welcome: { screen: Welcome },
    Logout: { screen: Logout },
  }, 
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

export default class App extends React.Component {
  render() { 
    return <RootStack />;
  }
}