
import React, { Component } from 'react';
import { Alert, Button, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';



export default class App extends Component {
  
 componentWillMount() {
    GoogleSignin.configure({
      iosClientId: '956016367956-anhpekqh6me98mku8hs4100vbbcus5d6.apps.googleusercontent.com'
    })
  
      
  }


render() {
  return (

   
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
   

      <TouchableOpacity style={styles.buttonStyle}
        onPress= {() => this.handleSigninGoogle()}>
        <Text > Sign in with Google + </Text></TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonStyle}
        onPress= {() => this.handleSignoutGoogle()}>
        <Text > Sign Out </Text></TouchableOpacity>
    </View>

  );
}
handleSigninGoogle() {
  GoogleSignin.signIn().then((user) => {
          alert('Hey User, you have successfully logged in')
          }).catch((err) => {
            console.log('Wrong signin', err);
          })
          .done();
   
}
handleSignoutGoogle() {
  GoogleSignin.signOut().then((user) => {
    this.setState({user: null})
          alert('Hey User, you have successfully logged out')
          }).catch((err) => {
            console.log('Wrong signin', err);
          })
          .done();
   
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    fontSize: 20,
    borderColor: 'black',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,

  },

  buttonStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    borderRadius: 5,
    backgroundColor: 'yellow',
    padding: 8
  }
});

