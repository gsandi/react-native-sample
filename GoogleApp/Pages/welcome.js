import React from 'react';
import { View, Button, TouchableOpacity, Image, Text, styles } from 'react-native';
import HeaderText from '/Users/agudala/Projects/GoogleApp/Pages/header.js';
import { pushNotification } from '../PushNotification/pushnotification';
import { GoogleSignin } from 'react-native-google-signin';



export default class Welcome extends React.Component {

   componentWillMount() {
  pushNotification.init()
    
    this.setGreeting();
  }

 

  setGreeting() {
    const hour = new Date().getHours();
    console.log("i got here");
    const greetings = (hour <= 12) ? 'Good Morning' : 'Good Evening'
    this.setState({
      time: greetings
    });
  };


  getTimeNotification=()=> {
    // pushNotification.postToken();
    // pushNotification.getCurrentTime();
    alert(`${this.state.time}`);
  }
  // signing out and directing to logout page!
  signOut() {
    GoogleSignin.signOut().then(() => {
      this.props.navigation.navigate('logout');
    }).catch(err => {
      console.log('Sign out Error:', err)
    });
  }


  render() {
    const resizeMode = 'contain';

    console.log("hello");
    const user = this.props.navigation.state.params.userInfo
    console.log({ user });
    return (
      <View
      style={{
        flex: 1,
        backgroundColor: '#eee',
      }}
    >
        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}>

            <Image  style={{ resizeMode}} source={require ('/Users/agudala/Projects/GoogleApp/Images/color.png')}/> 
        </View>
         <View 
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}>

          {/* <Text style={{
              textAlign: 'center',
              fontSize: 40,
            }}
          >{user.user.name}</Text>  */}
          <HeaderText text={`${this.state.time} ${user.user.givenName}`} />

          <Image style={{alignSelf: 'center', width: 160, height: 100, justifyContent: 'center'}} source ={{uri: user.user.photo}} />
           <TouchableOpacity  onPress={() => this.getTimeNotification()}>
       <Text> Send Notification </Text>
     </TouchableOpacity>  
     <TouchableOpacity  onPress={() => this.signOut()}>
      <Text>Signout</Text> 
     </TouchableOpacity>   
        </View> 
         </View>
    );
  }
};
