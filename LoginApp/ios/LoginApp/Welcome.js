
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
class Welcome extends React.Component {


    render() {

        return (
      
<View style = {styles.container}> 
<Text style = {styles.welcome} > Welcome Ash </Text>

<TouchableOpacity style={styles.button}>
       
        <Text > Time </Text></TouchableOpacity>
     

</View>
        );
}
}

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      },
welcome: {
    fontSize: 10,
    justifyContent: 'center'
},
button: {
    borderColor: 'black',
    backgroundColor: 'white'



 }});

 export default Welcome;