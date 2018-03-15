import React from 'react';
import {View, Image} from 'react-native';
import Button from 'react-native-button';
import HeaderText from '../header-text/header-text';
import {GoogleSignin} from 'react-native-google-signin';
import {pushNotification} from '../../services/push-notification.service.js';
import styles from '../../style/style';

export default class Welcome extends React.Component {

  componentWillMount() {
    pushNotification.init()
    this.setGreetingsMessage();
  }
  	
  setGreetingsMessage() {
    const hour = new Date().getHours();
    const greetings = (hour <= 11) ? 'Good Morning' : 'Good Evening'
    this.setState({
      time: greetings
    });
  };

  getTimeNotification(){
    pushNotification.postToken();
    pushNotification.getCurrentTime();
  }

  signOut() {
    GoogleSignin.signOut().then(() => {
      this.props.navigation.navigate('Logout')
    }).catch( err => {
      console.log('Sign out Error:', err)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderText text={this.state.time + " " + this.props.navigation.state.params.name}/>
        <Image style={styles.imgContainer} source={{uri: this.props.navigation.state.params.photo}} />
        <Button onPress={this.getTimeNotification} style={styles.getNotificationButton}>
          Get Notification
        </Button>
        <Button onPress={this.signOut.bind(this)} style={styles.signOutButton}>
          Sign Out
        </Button>
      </View>
    );
  }
};