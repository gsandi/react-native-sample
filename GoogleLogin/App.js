/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,buttonText} from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';




type Props = {};
export default class App extends Component<Props> {
  componentWillMount(){
    GoogleSignin.configure({
      iosClientId: '469280814728-vvghgphqsuv5dfo1qpcukv2675glsntk.apps.googleusercontent.com',
    })
  }
   
  render() {
    return(
      
      <View style = {styles.container}>
    <TouchableOpacity style={styles.buttonContainer} 
                     onPress={() => {this._callGoogle()}}>
             <Text  style={styles.buttonText}>LOGIN</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.buttonContainer} 
                     onPress={() => {this._logoutGoogle()}}>
             <Text  style={styles.buttonText}>LOGout</Text>
             </TouchableOpacity>
             </View>
    );
  }
  _callGoogle() {
    GoogleSignin.signIn().then((user) => {
   
        alert('hey '+user.email+ ' logged in!')
      })
      .catch((err) => {
        consol.log('wrong',err);
      })
      .done();
     }
  _logoutGoogle() {
    GoogleSignin.signOut().then((user) => {
        this.setState({ user: null })
        alert('logout') // Remember to remove the user from your app's state as well
    })
      .catch ((err) => {
        console.log('wrong',err);
      })
      .done();
    }
  }   


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonContainer:{
    backgroundColor: '#2980b6',
    paddingVertical: 15
},
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
}
});
