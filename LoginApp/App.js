import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, Button,Image } from 'react-native';

import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';


export default class GoogleSigninSampleApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      error: null,
    };
  }

  async componentDidMount() {
    this._googleConfigure();
    await this._getUserInfo();
  }

  _googleConfigure() {
    GoogleSignin.configure({
      iosClientId: '956016367956-anhpekqh6me98mku8hs4100vbbcus5d6.apps.googleusercontent.com’',
      offlineAccess: false,
    });
  }

  async _getUserInfo() {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({ userInfo, error: null });
    } catch (error) {
      const errorMessage =
        error.code === statusCodes.SIGN_IN_REQUIRED ? 'Welcome' : error.message;
      this.setState({
        error: errorMessage,
      });
    }
  }

  render() {
    const { userInfo } = this.state;

    const body = userInfo ? this.renderUserInfo() : this.renderSignInButton();
    return (
      <View style={[styles.container, { flex: 1 }]}>
      
      
        
        {body}
      </View>
    );
  }

  
  renderUserInfo() {
    const { userInfo } = this.state;

    return (
      <View style={styles.container}>
      <Image resize='contain' source={require('/Users/agudala/Projects/react-native-sample/LoginApp/Images/Google_Plus.png')}/>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>
          Welcome {userInfo.user.name}
        </Text>
        <Image
          style={{width: 150, height: 158}}
          source={{uri : userInfo.user.photo}}
        />

        <Button onPress={this._signOut} title="Log out" />
        {this.renderError()}
      </View>
    );
  }

  renderSignInButton() {
    return (
      <View style={styles.container}>
      <Image resize='contain' source={require('/Users/agudala/Projects/react-native-sample/LoginApp/Images/canva-mountain-photo-travel-quote-desktop-wallpaper-MACEATZU6s0.jpg')}/>
      
<GoogleSigninButton style={styles.buttonIcon}
  
  style={{width: 215, height: 50}}
  size={GoogleSigninButton.Size.Icon}
  color={GoogleSigninButton.Color.Dark}
  onPress= {this._signIn}/>
        {this.renderError()}
      </View>
    );
  }

  renderError() {
    const { error } = this.state;
    if (!error) {
      return null;
    }
    const text = `${error.toString()} ${error.code ? error.code : ''}`;
    return <Text>{text}</Text>;
  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo, error: null });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // sign in was cancelled
        Alert.alert('cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation in progress already
        Alert.alert('in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('play services not available or outdated');
      } else {
        Alert.alert('Something went wrong', error.toString());
        this.setState({
          error,
        });
      }
    }
  };

  _signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();

      this.setState({ userInfo: null, error: null });
    } catch (error) {
      this.setState({
        error,
      });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcb941',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button : {
    color: '#c8f7c5'

  }
});