import React from 'react';
import {View, Button, Image,ImageBackground, Text} from 'react-native';
import HeaderText from './header-text';
import styles from './styles';
// import {pushNotification} from './push-notification';
import {GoogleSignin} from 'react-native-google-signin';


export default class Welcome extends React.Component {

  componentWillMount() {
    this.setMessage();
  }
  	
  setMessage() {
    const hour = new Date().getHours();
    const greetings = (hour <= 11) ? 'Good Morning' : 'Good Evening'
    this.setState({
      time: greetings
    });
  };
    // signing out and directing to logout page!
    signOut() {
        GoogleSignin.signOut().then(() => {
          this.props.navigation.navigate('LogoutScreen');
        }).catch( err => {
          console.log('Sign out Error:', err)
        });
      }

    
      render() {
        const resizeMode = 'contain';

        console.log("hello");
        const user = this.props.navigation.state.params.userInfo
        console.log({user});
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
           <Image  style={{ resizeMode}} source={require ('/Users/agudala/Projects/react-native-sample/LoginApp/Images/ash1.jpg')}/>
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
          >{user.user.name}</Text> */}
           <HeaderText text={this.state.time + " " + user.user.givenName}/>

            <Image style={{alignSelf: 'center', width: 160, height: 100, justifyContent: 'center'}} source ={{uri: user.user.photo}} />
            <Button onPress = {this.signOut.bind(this)} title = 'Signout'/>
        </View>
        </View>
       
         

        );
      }
    };
