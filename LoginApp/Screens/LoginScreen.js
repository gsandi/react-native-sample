import React , {Component} from 'react';
import {View, Button} from 'react-native';
import styles from './styles';
import HeaderText from './header-text';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import {_googleConfigure} from './config';

export default class Login extends Component {
  state = {
    user : {}  }
    componentDidMount() {
        GoogleSignin.hasPlayServices({ autoResolve: true }).catch( err => {
          console.log("Play services error", err.code, err.message);
        });
        GoogleSignin.configure(_googleConfigure)
        
    }
    
      renderSignin = async() => {
        const userInfo = await GoogleSignin.signIn()
        this.setState({userInfo})
         


        console.log({userInfo});
    
          this.props.navigation.navigate('WelcomePage',{userInfo});
            
          }
    
      render() {
        return (
          <View style={styles.container}>
            <HeaderText text='Hello :)'/>
            <GoogleSigninButton
          style={{ width: 200, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.renderSignin} title = 'Click here'/>
          
          </View>
        );
      }
    };
