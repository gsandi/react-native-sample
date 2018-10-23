import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, Button,Image } from 'react-native';

import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import styles from '/Users/amudamula/reactprojects/react-native-sample/GoogleLogin/Components/Loginscreens/styles.js';

export default class Login extends Component {
    state = {
        userInfo: {},
     }
     
    render(){
      
       const user = this.props.navigation.state.params.userInfo.user

      return (
  
  <View style={styles.container}>
    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>
      Welcome {user.givenName}
    </Text>
    <Image
          style={{width: 150, height: 158}}
          source={{uri : user.photo}}
        />
        <Button onPress={this._signOut} title="Log out" />
  </View>
);

  }
   
  _signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.props.navigation.navigate('Login');
      this.setState({ userInfo: null, error: null });
    } catch (error) {
      this.setState({
        error,
      });
    }
  };
}

