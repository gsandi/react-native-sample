import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Creating re-usable button Component
//TouchableOpacity is a wrapper for making views respond properly to touches
const ButtonComponent = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
    <Text style={textStyle}> {children} </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
     alignSelf: 'center',
     color: '#66beb2',
     fontSize: 20,
     fontWeight: '600',
     paddingTop: 10,
     paddingBottom: 10
   },
   buttonStyle: {
    height: 50,
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#66beb2',
    marginLeft: 5,
    marginRight: 5
  }
};


export default ButtonComponent;
