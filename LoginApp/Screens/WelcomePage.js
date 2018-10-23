import React from 'react';
import {View, Button, Image,Text} from 'react-native';
import HeaderText from './header-text';
import styles from './styles';
// import {pushNotification} from './push-notification';
import {GoogleSignin} from 'react-native-google-signin';


export default class Welcome extends React.Component {
    // signing out and directing to logout page!
    signOut() {
        GoogleSignin.signOut().then(() => {
          this.props.navigation.navigate('LogoutScreen');
        }).catch( err => {
          console.log('Sign out Error:', err)
        });
      }

    
      render() {
        console.log("hello");
        const user = this.props.navigation.state.params.userInfo
        console.log({user});
        return (
          <View style={styles.container}>
            <Text>{user.user.name}</Text>
            <Image style = {{width :100 , height:100}} source ={{uri: user.user.photo}} />
            <Button onPress = {this.signOut.bind(this)} title = 'Signout'/>

          </View>
        );
      }
    };
