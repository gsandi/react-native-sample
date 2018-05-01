import React, { Component } from 'react'
import { View, Text, Button, StyleSheet} from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { userLogin } from '../../store/actions/AuthActions';

const googleConfig = {
    scopes: ["https://www.googleapis.com/auth/drive.readonly"], 
    webClientId: "966626647698-jgprl9vlko9rmv9q050jdlvcl2hpno3v.apps.googleusercontent.com", 
}

class LoginScreen extends Component {
    static navigatorStyle = {
        drawUnderNavBar: true,
        navBarComponentAlignment: 'center', // center/fill
        navBarTitleTextCentered: true, // default: false. centers the title.
    };
    componentWillMount() {
        GoogleSignin.hasPlayServices({ autoResolve: true }).catch( err => {
          console.log("Play services error", err.code, err.message);
        });
        
        GoogleSignin.configure(googleConfig)
      }

    loginHandler = () => {
        GoogleSignin.signIn().then( user => {
            this.setState({user: user});
            this.props.userLogin(user);
            this.props.navigator.push({
                screen: 'react-native-sample.HomeScreen',
                title: 'Home',
                animated: true,
                animationType: 'fade',
                navigatorButtons: {
                  leftButtons: [
                    {}
                  ]
                }
              });

          }).catch( err => {
            console.log('WRONG SIGNIN', err);
          }).done();
    }
    /**
     * @param { }
     * @name render
     * @description 
     *      Render the Interface, must be wrapped in a single View or element.
     */
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Welcome,</Text>
                <Text style={styles.message}>Please Login</Text>
                <GoogleSigninButton style={{width:200,height:60}} size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.light} onPress={this.loginHandler} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5C6BC0'
    },
    message:{
        marginBottom: 10,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        fontSize: 20,
    },
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ userLogin }, dispatch);
}
  
  export default connect(null, mapDispatchToProps)(LoginScreen);