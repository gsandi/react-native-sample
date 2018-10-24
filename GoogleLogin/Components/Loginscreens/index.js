import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, Button,Image,TouchableOpacity,ImageBackground } from 'react-native';

import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import styles from '/Users/amudamula/reactprojects/react-native-sample/GoogleLogin/Components/Loginscreens/styles.js';

const btnImage = require('/Users/amudamula/reactprojects/react-native-sample/GoogleLogin/Images/Icon.png');

const backgroundImage = require('/Users/amudamula/reactprojects/react-native-sample/GoogleLogin/Images/loginbackground.jpg');


export default class Login extends Component {
  state = {
    userinfo: {}
  }
  
  async componentDidMount() {
    this._configureGoogleSignIn();
   
  }

  _configureGoogleSignIn() {
    GoogleSignin.configure({
      iosClientId: '469280814728-vvghgphqsuv5dfo1qpcukv2675glsntk.apps.googleusercontent.com',
      shouldFetchBasicProfile: true
    });
  }
  

  
  render() {
    return (
     
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey'
      }}>
        <Image
          style={[
            {
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              justifyContent: 'center',
              alignItems: 'center'
            },
            {
              width: '100%',
              height: '100%'
            }
          ]}
          source={backgroundImage}
        />
        <View style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: 36
        }}>
        <TouchableOpacity styles = {styles.button} onPress={() => this._signIn()}>
        <Image style={styles.btn} source={btnImage} />
      </TouchableOpacity>
      </View>
     </View>
      
      
    )
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
    
      
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo});
      console.log(userInfo.user);
      this.props.navigation.navigate('Home', {userInfo});
  };
}