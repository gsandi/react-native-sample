import React from 'react' ;
import {View, Button, Text, TouchableOpacity } from 'react-native';
import HeaderText from './header';

export default class Logout extends React.Component{
    navigateToLoginPage() {
        this.props.navigation.navigate('login');
    }
render() {
    return (
        <View >
        
        <HeaderText text="Bye..see you soon :)"/>
        <TouchableOpacity onPress={()=> this.navigateToLoginPage()}
      >
      <Text> Logout->home page </Text>
        </TouchableOpacity>
        
        </View>
    );
}

};