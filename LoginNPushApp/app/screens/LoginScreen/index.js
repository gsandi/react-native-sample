import React, { Component } from 'react';
import {
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  Image,
  NetInfo,
  ToastAndroid
} from 'react-native';
import GoogleSignIn from 'react-native-google-sign-in';
import Orientation from 'react-native-orientation';
import styles from './styles';

const backgroundImage = require('../../assets/background.png');
const btnImage = require('../../assets/btn.png');

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class LoginScreen extends Component {
  state = {
    user: null
  }
// checking if the orientation of the device changed
  componentDidMount() {
    Orientation.addOrientationListener(this.orientationDidChange);
  }
// Adjusting the height and width according to the current orientation
  orientationDidChange = orientation => {
    if (orientation === 'LANDSCAPE') {
      this.setState({
        deviceWidth: height,
        deviceHeight: width
      });
    } else if (orientation === 'PORTRAIT') {
      this.setState({
        deviceWidth: width,
        deviceHeight: height
      });
    }
  }

// Sign in using react-native-google-sign methods

  signInWithGoogle = async () => {
    //Check for Internet connection
    const isConnected = await NetInfo.isConnected.fetch();

    if (!isConnected) {
      ToastAndroid.show('No Internet Connection', ToastAndroid.LONG);
      return;
    }

//Configure GoogleSignIn to retrieve user's basic profile info.
    try {
      await GoogleSignIn.configure({
        shouldFetchBasicProfile: true
      });

      //Returns the user info on successful login
      let user = await GoogleSignIn.signInPromise();

      //Verifying if the user's basic information was retrieved
      if (user.givenName === 'null') {
        user = await GoogleSignIn.signInPromise();
      }

      this.setState({ user });

      //Navigate to the welcome screen
      if (user !== null) {
        this.props.navigation.navigate('Home', { user });
      }
    } catch (error) {
      console.log('===>>error<<===', error);
    }
  }

//Load the background image and sign in button.
  render() {
    const { container, welcome, background, btn } = styles;

    return (
      <View style={container}>
        <Image
          style={[
            background,
            {
              width: this.state.deviceWidth,
              height: this.state.deviceHeight
            }
          ]}
          source={backgroundImage}
        />
        <Text style={welcome}>Welcome!</Text>
        <TouchableOpacity onPress={() => this.signInWithGoogle()}>
          <Image style={btn} source={btnImage} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginScreen;
