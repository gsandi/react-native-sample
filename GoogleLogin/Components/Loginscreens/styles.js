import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey'
  },
  container2: {
   position : 'absolute',
    bottom: 0
  },
  welcome: {
    fontSize: 80,
    marginBottom: 25,
    fontWeight: 'bold',
    color: 'white'
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    buttonContainer:{
      backgroundColor: 'transparent',
      paddingVertical: 15
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },

    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32
    },
  btn: {
    height: 50,
    width: 250,
    marginBottom: 55,
  
    bottom: 0
  }
});