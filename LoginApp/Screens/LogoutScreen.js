import React from 'react' ;
import {View, Button, Text, TouchableOpacity} from 'react-native';
import HeaderText from './header-text';
import styles from '/Users/agudala/Projects/react-native-sample/LoginApp/Styles/styles.js';

export default class Logout extends React.Component{
    navigateToLoginPage() {
        this.props.navigation.navigate('LoginScreen');
    }
render() {
    return (
        <View style = {styles.container}>
        
        <HeaderText text="Bye..see you soon :)"/>
        <TouchableOpacity style = {styles.LoginPageButton} onPress={()=> this.navigateToLoginPage()}
      >
      <Text> logout->home page</Text>
        </TouchableOpacity>
        
        </View>
    );
}

};