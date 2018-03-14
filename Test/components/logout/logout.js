import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from 'react-native-button';
import HeaderText from '../header-text/header-text'


export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderText text='Bye!.. see you soon'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#455A64',
  },
});
