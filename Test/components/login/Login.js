import React, { Component } from 'react';
import {View} from 'react-native';
import Button from 'react-native-button';
import HeaderText from '../header-text/header-text'
import {StackNavigator} from 'react-navigation';
import {GoogleSignin} from 'react-native-google-signin';
import styles from '../../style/style';

export default class Login extends Component {

  componentDidMount() {
    GoogleSignin.hasPlayServices({ autoResolve: true })
    .then(() => {})
    .catch((err) => {
      console.log("Play services error", err.code, err.message);
    });

    GoogleSignin.configure({
      scopes: ["https://www.googleapis.com/auth/drive.readonly"], 
      webClientId: "408004852008-6bcqgg84o620qdcnoti93ba3hmuij8dh.apps.googleusercontent.com", 
    })
    }

  handleSignin() {
    GoogleSignin.signIn()
    .then((user) => {
      this.setState({user: user});
      this.props.navigation.navigate('Welcome' , {name: this.state.user.givenName, photo: this.state.user.photo });
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done();
  }

  constructor(props) {
    super(props);
    this.state = {
      user:  {}
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderText text='Hi There!! Please '/>
        <Button
          style={styles.signInButton}
          onPress={this.handleSignin.bind(this)}>
          Sign in with Google
        </Button>
      </View>
    );
  }
};