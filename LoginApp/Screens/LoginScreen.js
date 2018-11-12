import React , {Component} from 'react';
import {View, Button, TouchableOpacity, Image} from 'react-native';
import styles from '/Users/agudala/Projects/react-native-sample/LoginApp/Styles/styles.js';


import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import {_googleConfigure} from './config';

export default class Login extends Component {
  state = {
    user : {}  }
    componentWillMount() {
        
        GoogleSignin.configure(_googleConfigure)
        console.log('what is this')
        
    }
    
      renderSignin = async() => {
        const userInfo = await GoogleSignin.signIn()
        this.setState({userInfo})
        console.log({userInfo});
    
          this.props.navigation.navigate('WelcomePage',{userInfo});
            
          }
    
      render() {
        
        return (
        
<View style={{
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: 'grey'
     }}>
       <Image
         style={[
           {
             position: 'absolute',
             top: 0,
             bottom: 0,
             left: 0,
             right: 0,
             justifyContent: 'center',
             alignItems: 'center'
           },
           {
             width: '100%',
             height: '100%'
           }
         ]}
         source = {require('/Users/agudala/Projects/react-native-sample/LoginApp/Images/sky.jpg')}       />
       <View style={{
       alignContent : 'center',
      
       }}>
       <TouchableOpacity styles = {styles.button} onPress={() => this.renderSignin()}>
       <Image style={{justifyContent: 'center'}} source={require('/Users/agudala/Projects/react-native-sample/LoginApp/Images/googleLogin.png')} />
     </TouchableOpacity>

     </View>
    </View>
   
       
        );
      }
    };
