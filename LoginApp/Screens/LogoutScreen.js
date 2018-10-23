import React from 'react' ;
import {View, Button} from 'react-native';
import HeaderText from './header-text';
import styles from './styles';

export default class Logout extends React.Component{
    navigateToLoginPage() {
        this.props.navigation.navigate('LoginScreen');
    }
render() {
    return (
        <View style = {styles.container}>
        <HeaderText text="Bye..see you soon :)"/>
        <Button style = {styles.LoginPageButton} onPress = {this.navigateToLoginPage.bind(this)}
        title ='logout->home page'>
        </Button>
        
        </View>
    );
}

};