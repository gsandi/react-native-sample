import React from 'react';
import {View} from 'react-native';
import HeaderText from '../header-text/header-text'
import Button from 'react-native-button';
import {GoogleSignin} from 'react-native-google-signin';
import {googleConfig} from './google-config'
import styles from '../../style/style';

export default class Login extends React.Component {

  componentWillMount() {
    GoogleSignin.hasPlayServices({ autoResolve: true }).catch( err => {
      console.log("Play services error", err.code, err.message);
    });
    
    GoogleSignin.configure(googleConfig)
  }

  handleSignin() {
    GoogleSignin.signIn().then( user => {
      this.setState({user: user});

      this.props.navigation.navigate('Welcome' , {
        name: this.state.user.givenName, 
        photo: this.state.user.photo 
      });

    }).catch( err => {
      console.log('WRONG SIGNIN', err);
    }).done();
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderText text='Hi There!! Please'/>
        <Button style={styles.signInButton} onPress={this.handleSignin.bind(this)}>
          Sign in with Google
        </Button>
      </View>
    );
  }
};