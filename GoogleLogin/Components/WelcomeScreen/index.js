import React, { Component } from 'react';
import { AppState, StyleSheet, Text, View, Alert, Button,Image,TouchableOpacity } from 'react-native';
import PopupDialog, {
  SlideAnimation,
  DialogTitle
} from 'react-native-popup-dialog';

import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import styles from '/Users/amudamula/reactprojects/react-native-sample/GoogleLogin/Components/Loginscreens/styles.js';
import PushNotification from 'react-native-push-notification';
import PushController from '/Users/amudamula/reactprojects/react-native-sample/GoogleLogin/Components/pushnotifications.js';
import { notification } from '/Users/amudamula/reactprojects/react-native-sample/GoogleLogin/Components/notifications.js';
const backgroundImage = require('/Users/amudamula/reactprojects/react-native-sample/GoogleLogin/Images/WelcomeBackground.jpg');

export default class Welcome extends Component {
    state = {
        userInfo: {},
     }
 
     componentDidMount() {
      notification.init()
      console.log("hellop")
     }
   
handleGreeting(){
  const today = new Date();
    const curHr = today.getHours();
    let greeting = '';

    if (curHr < 12) {
      greeting = 'Morning';
    }
    else if (curHr < 18) {
      greeting = 'Afternoon';
    }
    else {
      greeting = 'Evening';
    }
    return greeting;
  }
  sendNotification() {
    PushNotification.localNotification({
      message: 'You pushed the notification button!'
    });

  };
  getTimeNotification(){
    notification.postNotificationToken();
    notification.getTime();
  }

    render(){
      
       const user = this.props.navigation.state.params.userInfo.user

      return (
  
        <View style={styles.container}>
        <Image
          style={[
            styles.background,
            {
              width: '100%',
              height: '100%'
            }
          ]}
          source={backgroundImage}
        />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20,color:"white" }}>
      Welcome {user.givenName}
    </Text>
    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20,color:"white" }}>Good {this.handleGreeting()}, {user.givenName}</Text>
    <Image
          style={{width: 150, height: 158}}
          source={{uri : user.photo}}
        />
        <Button onPress={this._signOut} title="Log out" />
        <Button title='Press here for a notification'
          onPress={this.sendNotification} />
           <TouchableOpacity style={styles.button} onPress={this.signOut}>
                    <Text style={styles.buttonText}>Sign Out</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.getTimeNotification}>
                    <Text style={styles.buttonText}>Send Notification</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.sendNotification}>
                    <Text style={styles.buttonText}> Notification</Text>
                </TouchableOpacity>
           
        

        
        
  </View>
);

  }
   
  _signOut = async () => {
    try {

      await GoogleSignin.signOut();
      this.props.navigation.navigate('Logout');
      this.setState({ userInfo: null, error: null });
    } catch (error) {
      this.setState({
        error,
      });
    }
  };
}

