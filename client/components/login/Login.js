import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import { Google } from 'expo'

class Login extends Component {
    render() {
        return (
            <View>
                <Text>Login</Text>
                <Button onPress={this.signIn.bind(this)} title="Google Sign In" />
                <Button onPress={() => this.props.history.push('/welcome')} title="Welcome" />
            </View>
        )
    }

    async signIn() {
        console.log('clicked signin')
        let options = {
            androidStandaloneAppClientId: '504976081963-fo3trfhh450pk8q78dnqem30er557l7l.apps.googleusercontent.com',
            androidClientId: '504976081963-fo3trfhh450pk8q78dnqem30er557l7l.apps.googleusercontent.com'
        }
        try {
            console.log('in try')
            const res = await Google.logInAsync(options)
            console.log(res)
        }
        catch (e) {
            console.error(e)
        }
    }
}

export default Login