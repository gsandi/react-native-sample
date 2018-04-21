import { Navigation } from 'react-native-navigation';

import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import LogoutScreen from './src/screens/LogoutScreen/LogoutScreen'

Navigation.registerComponent('react-native-sample.LoginScreen', () => LoginScreen);
Navigation.registerComponent('react-native-sample.LogoutScreen', () => LogoutScreen);
Navigation.registerComponent('react-native-sample.HomeScreen', () => HomeScreen);


Navigation.startSingleScreenApp({
  screen: {
    screen: 'react-native-sample.LoginScreen',
    title: 'Welcome, Please Login'
  }
});
