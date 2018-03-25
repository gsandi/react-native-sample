import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux'
import { loggedIn } from "../../redux/actions"
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin'

class Login extends Component {

    componentDidMount() {
        GoogleSignin.currentUserAsync()
            .then(user => {
                console.log('current user', user)
                this.props.dispatchLogin(user)
            })
            .catch(err => console.error(err))
    }

    render() {
        return (
            <View>
                <Text>Login</Text>
                <GoogleSigninButton style={{width:230,height:48}} size={GoogleSigninButton.Size.Standard}
                    color={GoogleSigninButton.Color.Dark} onPress={this.signIn.bind(this)} />
                <Button onPress={() => this.props.history.push('/welcome')} title="Go to Welcome" />
            </View>
        )
    }

    async signIn() {
        console.log('clicked signin')
        GoogleSignin.hasPlayServices({autoResolve:true})
            .then(() => {
                console.log('Play svcs available. Can now configure')
                GoogleSignin.configure({
                    webClientId: '489007047017-0liilqmhjd04dbbj4p198efsc07h7k3g.apps.googleusercontent.com'
                })
                .then(() => {
                    GoogleSignin.signIn()
                        .then(user => {
                            console.log('signed in user',user)
                            this.props.dispatchLogin(user)
                            this.props.history.push('/welcome')
                        })
                        .catch(err => console.error(err))
                        .done()
                })
            })
            .catch(err => console.error(err))
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchLogin: user => dispatch(loggedIn(user))
    }
}

export default connect(null,mapDispatchToProps)(Login)