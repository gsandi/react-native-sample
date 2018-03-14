import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class HeaderText extends Component {
  render() {
    return (
        <Text style={styles.headerText}> {this.props.text} </Text>
    );
  }
}

const styles = StyleSheet.create({
    headerText: {
      fontFamily: 'roboto',
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      textShadowOffset: {width: 2,height: 2}
    },
  });
