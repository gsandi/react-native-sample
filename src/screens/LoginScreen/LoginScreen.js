import React, { Component } from 'react'
import { View, Text, Button } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';

class LoginScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    }

    render(){
        return (
            <View>
                <Text>LoginScreen</Text>
                <Button title="Login" onPress={this.loginHandler}/>
            </View>
        );
    }
}

export default LoginScreen