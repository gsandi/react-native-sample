import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  Image
} from 'react-native';
import  {StackNavigator} from 'react-navigation';

export default class Welcome extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.header}>
            Good After Noon Qays
          </Text>
          <View style={styles.imgContainer}>
            <Image
              uri=""
            />
          </View>
          <View style={styles.buttonsWrapper}>
            <Button 
            onPress={()=> {this.props.navigation.navigate('Login')}}
            title="Get Time"
            color="#087f23">
            </Button>
            <Button 
            onPress={()=> {this.props.navigation.navigate('Login')}}
            title="Sign Out"
            color="maroon">
            </Button>
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#006064',
    },
    header: {
      flex: 1,
      fontSize: 30,
      marginTop: 30,
      color: 'white'
    },
    imgContainer: {
      flex: 1,
      width: 130,
      backgroundColor: '#b2dfdb',
      borderRadius: 240,
      borderColor: '#4ebaaa',
      borderWidth: 10
    },
    buttonsWrapper: {
      flex: 2,
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 100,
      width:300,
      flexDirection: 'row'
    },
    signOutButton: {
      width: 100,
    }
  });