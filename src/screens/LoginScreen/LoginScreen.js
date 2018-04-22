import React, { Component } from 'react'
import { View, Text, Button } from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

import startMainTabs from '../MainTabs/startMainTabs';

const googleConfig = {
    scopes: ["https://www.googleapis.com/auth/drive.readonly"], 
    webClientId: "966626647698-jgprl9vlko9rmv9q050jdlvcl2hpno3v.apps.googleusercontent.com", 
}

class LoginScreen extends Component {

    componentWillMount() {
        GoogleSignin.hasPlayServices({ autoResolve: true }).catch( err => {
          console.log("Play services error", err.code, err.message);
        });
        
        GoogleSignin.configure(googleConfig)
      }
    

    loginHandler = () => {
        GoogleSignin.signIn().then( user => {
            this.setState({user: user});
            startMainTabs();

          }).catch( err => {
            console.log('WRONG SIGNIN', err);
          }).done();
    }

    render(){
        return (
            <View>
                <Text>LoginScreen</Text>
                <GoogleSigninButton style={{width:312,height:60}} size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark} onPress={this.loginHandler} />
            </View>
        );
    }
}

export default LoginScreen