import React from 'react';
import {View} from 'react-native';
import HeaderText from '../header-text/header-text'
import Button from 'react-native-button';
import styles from '../../style/style';

export default class Logout extends React.Component {

  goToHomePage(){
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderText text='Bye!.. see you soon'/>
        <Button style={styles.goToHomePageButton} onPress={this.goToHomePage.bind(this)}>
          Home Page
        </Button>
      </View>
    );
  }
};