
import React, {Component} from 'react';
import {Alert,Button, TouchableOpacity, TextInput, StyleSheet, Text, View} from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';



export default class App extends Component {
componentWillMount() {
  GoogleSignin.configure( {
    iosClientId: '956016367956-anhpekqh6me98mku8hs4100vbbcus5d6.apps.googleusercontent.com'
  })
}
  state = {
    email: '',
    password: '',
  };
  

    onLogin() {
      const { email, password} = this.state;
  
      Alert.alert('Alert: Please enter the correct email');
    }
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome</Text>
          <TextInput style = {styles.input}  
          value = {this.state.email}
          keyboardType = 'email-address'
          onChangeText = {(email) => this.setState({ email })}
          placeholder = 'Enter email address'
          placeholderTextColor = 'black'/>
          
          <TextInput  style={styles.input}
          value = {this.state.password}
          
          onChangeText = {(password) => this.setState( {password })}
          placeholder= {'Password'}
          secureTextEntry={true}
          placeholderTextColor = 'black'/>
    
  <TouchableOpacity style = {styles.buttonStyle}
  onPress = {() => this.handleSigninGoogle(this.state.email,this.state.password)}>
  <Text > Sign in with Google + </Text></TouchableOpacity>      
  <GoogleSigninButton
    style={{ width: 48, height: 48 }}
    size={GoogleSigninButton.Size.Icon}
    color={GoogleSigninButton.Color.Dark}
    onPress={this._signIn}
    disabled={this.state.isSigninInProgress} />
  
  </View>

      );
    }
    handleSigninGoogle(email,password) {
          GoogleSignin.signIn().then((user) => {
            console.log(user);
          }).catch((err) => {
            console.log('Wrong signin', err);
          }).done();
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
    button: {
      alignItems: 'center',
      backgroundColor: 'powderblue',
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 25,
      marginBottom: 10,
    },
    buttonText:{
      fontFamily: 'Baskerville',
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonStyle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFF',
      borderRadius: 5,
      backgroundColor: 'red',
      padding: 8
    }
  });
  
  