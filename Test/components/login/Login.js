import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from 'react-native-button';
import HeaderText from '../header-text/header-text'

import  {StackNavigator} from 'react-navigation';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

//TODO: remove user session with sign out 

export default class Login extends Component {

  componentDidMount() {
    GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
    })
    .catch((err) => {
      console.log("Play services error", err.code, err.message);
    });

    GoogleSignin.configure({
      scopes: ["https://www.googleapis.com/auth/drive.readonly"], 
      webClientId: "408004852008-6bcqgg84o620qdcnoti93ba3hmuij8dh.apps.googleusercontent.com", 
    })
    .then(() => {
    });
    }

  handle() {
    let self = this;
    GoogleSignin.signIn()
    .then((user) => {
      this.setState({user: user});
      self.props.navigation.navigate('Welcome' , {name: this.state.user.givenName, photo: this.state.user.photo });
    })
    .catch((err) => {
      alert(err)
      console.log('WRONG SIGNIN', err);
    })
    .done();
  }

  constructor(props) {
    super(props);
    this.state = {
      user:  {
        id: null
       ,name: null
       ,givenName: null
       ,familyName: null
       ,email: null
       ,photo: null
       ,idToken: null
       ,serverAuthCode: null
       ,scopes: null
       ,accessToken: null
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderText text='Hi There!! Please '/>
        <GoogleSigninButton 
          style={styles.signInButton}
          onPress={this.handle.bind(this)}
        />
          <Button
            style={styles.test}
            onPress={() => alert('clicked')}>
            Sign in with Google
          </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#455A64',
  },
  signInButton: {
    width: 200,
    height: 48,
    marginTop: 50,
  }, 
  test: {
    fontSize: 25,
    padding: 10,
    paddingRight:32,
    paddingLeft:32,
    marginTop: 25,
    backgroundColor:'#d14836',
    borderRadius: 6,
    color: 'white',
    textShadowOffset: {width: 0,height: 1}

  }
});
