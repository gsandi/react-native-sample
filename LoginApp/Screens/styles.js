import {StyleSheet} from 'react-native';

const button = {
fontSize: 25,
  padding: 10,
  paddingRight:32,
  paddingLeft:32,
  borderRadius: 6,
  color: 'white',
  textShadowOffset: {width: 0,height: 1}
}

export default styles = StyleSheet.create ({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems : 'center',
        backgroundColor: 'white',
    },
    signInButton : Object.assign ({
        marginTop: 25,
        backgroundColor: '#d14836',
       
    }, button),
   
    LoginPageButton : {
        marginTop: 5,
        fontSize: 18,
        color: '#2db'

    },
    headerText : {
        fontFamily: 'arial',
    fontSize: 30,
    color: 'black',
    textShadowOffset: {width: 2,height: 2}
    },
    signOutButton: Object.assign({
        margin: 20,
        backgroundColor:'#d14836',
      }, button),
   
})