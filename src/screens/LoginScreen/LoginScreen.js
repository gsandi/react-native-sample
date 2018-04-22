import React, { Component } from 'react'
import { View, Text, Button } from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

import startMainTabs from '../MainTabs/startMainTabs';

class LoginScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    }

    render(){
        return (
            <View>
                <Text>LoginScreen</Text>
                <GoogleSigninButton
                    style={{width: 48, height: 48}}
                    size={GoogleSigninButton.Size.Icon}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this._signIn}/>
                <Button title="Login" onPress={this.loginHandler}/>
            </View>
        );
    }
}

export default LoginScreen