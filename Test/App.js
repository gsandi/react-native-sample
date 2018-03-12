import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';


export default class App extends Component {

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
    GoogleSignin.signIn()
    .then((user) => {
      console.log(user);
      this.setState({user: user});
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
       ,name: 'not logged in'
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
        <GoogleSigninButton
          style={{width: 48, height: 48}}
          size={GoogleSigninButton.Size.Icon}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.handle.bind(this)}/>

        <Text>
          {this.state.user.name}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
