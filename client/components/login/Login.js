import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import { Google } from 'expo'
import { connect } from 'react-redux'
import { loggedIn } from "../../redux/actions";

class Login extends Component {

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) console.log('login component',nextProps)
    }

    render() {
        return (
            <View>
                <Text>Login</Text>
                <Button onPress={this.signIn.bind(this)} title="Google Sign In" />
                <Button onPress={() => this.props.history.push('/welcome')} title="Go to Welcome" />
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
            if (res.type === 'success') {
                console.log('sign in success')
                this.props.dispatchLogin(res.user)
                this.props.history.push('/welcome')
            }
            else {
                console.log('sign in failed')
            }
        }
        catch (e) {
            console.error(e)
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchLogin: user => dispatch(loggedIn(user))
    }
}

export default connect(null,mapDispatchToProps)(Login)