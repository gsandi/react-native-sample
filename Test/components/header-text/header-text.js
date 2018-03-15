import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from '../../style/style';

export default class HeaderText extends Component {
  render() {
    return (
        <Text style={styles.headerText}> {this.props.text} </Text>
    );
  }
};