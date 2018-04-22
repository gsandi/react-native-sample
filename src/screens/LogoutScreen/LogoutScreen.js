import React, { Component } from 'react'
import { View, Text, Button } from 'react-native';

class LogoutScreen extends Component {
    logBackIn(){
        this.props.navigator.push({
            screen: 'react-native-sample.LoginScreen',
          });
    }

    render(){
        return (
            <View>
                <Text>GoodBye, Hope to see you again!</Text>
                <Button title="Log Back In?" onPress={this.logBackIn.bind(this)}/>
            </View>
        );
    }
}

export default LogoutScreen