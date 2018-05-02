import React, { Component } from 'react'
import { StyleShee, View, TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux'
import { loggedIn } from "../../redux/actions"
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin'
import { Text } from "react-native-elements"

class Login extends Component {

    render() {
        return (
            <View>
                <Text h1>Sign In</Text>
                <GoogleSigninButton style={{width:312,height:60}} size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark} onPress={this.signIn.bind(this)} />
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

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchLogin: user => dispatch(loggedIn(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)