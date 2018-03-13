import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import  {StackNavigator} from 'react-navigation';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';


export default class Login extends Component {

  componentDidMount() {
    GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
    })
    .catch((err) => {
      console.log("Play services error", err.code, err.message);
    });

    GoogleSignin.configure({
      scopes: ["https://www.googleapis.com/auth/drive.readonly"], 
      webClientId: "408004852008-6bcqgg84o620qdcnoti93ba3hmuij8dh.apps.googleusercontent.com", 
    })
    .then(() => {
    });
    }

  handle() {
    let self = this;
    GoogleSignin.signIn()
    .then((user) => {
      this.setState({user: user});
      self.props.navigation.navigate('Welcome');
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done();
  }

  constructor(props) {
    super(props);
    this.state = {
      user:  {
        id: null
       ,name: null
       ,givenName: null
       ,familyName: null
       ,email: null
       ,photo: null
       ,idToken: null
       ,serverAuthCode: null
       ,scopes: null
       ,accessToken: null
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Hi There!! 
          Please sign in!
        </Text>
        <GoogleSigninButton 
          style={styles.signInButton}
          onPress={this.handle.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006064',
  },
  headerText: {
    fontFamily: 'roboto',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  signInButton: {
    width: 200,
    height: 48,
    marginTop: 200,
  },
});
