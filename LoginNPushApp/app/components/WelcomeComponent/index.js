import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

//A place holder in case the user's profile has no image
const imagePlaceholder = require('../../assets/noimage.jpg');

//Destructuring styles import
const { card, profileImg, welcome } = styles;
// Card holder for profile image and user name for Homescreen
const WelcomeComponent = ({ name, photoUrl, handleGreeting }) => (
  <View style={card}>
    <Image
      style={profileImg}
      source={
        photoUrl
          ? {
              uri: photoUrl
            }
          : imagePlaceholder
      }
    />
    <Text style={welcome}>
      Good {handleGreeting()}
      {'\n'}
      {name ? name : ''}
    </Text>
  </View>
);

export default WelcomeComponent;
