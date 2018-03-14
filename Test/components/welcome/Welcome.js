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
  constructor(props) {
    super(props);
    this.state = {
      time: ''
    };
  }

  componentDidMount() {
     this.GetTime();
     console.log('اي شي')
  }
  	
  GetTime() {
    var date, hour, greetings;
    date = new Date();
    hour = date.getHours(); 
    if(hour <= 11){
      greetings = 'Good Morning'
    }
    else{
      greetings = 'Good Evening'
    }
    this.setState({
      time: greetings
    });
  };

  render() {
    let pic = {
      uri: this.props.navigation.state.params.photo
    };
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          {this.state.time} {this.props.navigation.state.params.name}
        </Text>
        <Image
          style={styles.imgContainer}
          source={pic}
        />
        <View style={styles.buttonsWrapper}>
          <Button 
          onPress={()=> {this.props.navigation.navigate('Login')}}
          title="Get Time"
          color="#607D8B">
          </Button>
          <Button 
          onPress={()=> {alert('Bye!.. see you soon'); this.props.navigation.navigate('Login')}}
          title="Sign Out"
          color="#880E4F">
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
      backgroundColor: '#455A64',
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
      height:100,
      borderRadius: 100,
      borderColor: '#90A4AE',
      borderWidth: 3
    },
    buttonsWrapper: {
      flex: 2,
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 100,
      width:300,
      flexDirection: 'row',
    },
  });