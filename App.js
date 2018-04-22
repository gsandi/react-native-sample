import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import LogoutScreen from './src/screens/LogoutScreen/LogoutScreen'

import configureStore from './src/store/configureStore';

const store = configureStore()

Navigation.registerComponent('react-native-sample.LoginScreen', () => LoginScreen, store, Provider);
Navigation.registerComponent('react-native-sample.LogoutScreen', () => LogoutScreen, store, Provider);
Navigation.registerComponent('react-native-sample.HomeScreen', () => HomeScreen, store, Provider);


Navigation.startSingleScreenApp({
  screen: {
    screen: 'react-native-sample.LoginScreen',
    title: 'Welcome, Please Login'
  }
});
