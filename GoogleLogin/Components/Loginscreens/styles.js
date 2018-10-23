import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey'
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 25,
    fontWeight: 'bold',
    color: '#fff'
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
  btn: {
    height: 50,
    width: 250,
    marginBottom: 55
  }
});