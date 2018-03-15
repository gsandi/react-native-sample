import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import Button from 'react-native-button';
import HeaderText from '../header-text/header-text';
import {GoogleSignin} from 'react-native-google-signin';
import  {StackNavigator} from 'react-navigation';
import {pushNotification} from '../../services/push-notification.service.js';
import styles from '../../style/style';

pushNotification.init()

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: ''
    };
  }

  componentDidMount() {
     this.GetTime();
  }
  	
  GetTime() {
    var date, hour, greetings;
    date = new Date();
    hour = date.getHours(); 
    if(hour <= 11){
      greetings = 'Good Morning'
    }
    else{
      greetings = 'Good Evening'
    }
    this.setState({
      time: greetings
    });
  };

  getTimeNotification(){
    pushNotification.postToken();
    pushNotification.getCurrentTime();
  }

  signOut() {
    GoogleSignin.signOut()
    .then(() => {
      this.props.navigation.navigate('Logout')
    }).catch((err) => {
      console.log(err)
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
        <Button 
        onPress={this.signOut.bind(this)}
        style={styles.signOutButton}>
        Sign Out
        </Button>
      </View>
    );
  }
};