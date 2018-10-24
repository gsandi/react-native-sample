import React from 'react' ;
import {View, Button,Text,Image,TouchableOpacity} from 'react-native';
import styles from '/Users/amudamula/reactprojects/react-native-sample/GoogleLogin/Components/Loginscreens/styles.js';

const backgroundImage = require('/Users/amudamula/reactprojects/react-native-sample/GoogleLogin/Images/logoutBackground.jpg');


export default class Logout extends React.Component{
   navigateToLoginPage() {
       this.props.navigation.navigate('Login');
   }
render() {
   return (
    <View style={styles.container}>
    <Image
      style={[
        styles.background,
        {
          resizeMode :"contain"
        }
      ]}
      source={backgroundImage}
    />
    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20,color:"white" }}>
    "Bye..see you soon :)"
    </Text>
    <TouchableOpacity styles = {styles.button} onPress={this.navigateToLoginPage.bind(this)}>
    <Text style ={{fontSize: 18, fontWeight: 'bold', marginBottom: 20,color:"white"}}>Logout-->Home Page</Text>
  </TouchableOpacity>

       </View>
   );
}

};