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

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#455A64',
  },
  headerText: {
    fontFamily: 'roboto',
    fontSize: 30,
    color: 'white',
    textShadowOffset: {width: 2,height: 2}
  },
  imgContainer: {
    width: 130,
    height:130,
    margin: 30,
    borderRadius: 100,
    borderColor: '#90A4AE',
    borderWidth: 3
  },
  signInButton: Object.assign({
    marginTop: 25,
    backgroundColor:'#d14836',
  }, button),
  signOutButton: Object.assign({
    margin: 20,
    backgroundColor:'#d14836',
  }, button),
  getNotificationButton: Object.assign({
    // marginTop: 100,
    backgroundColor: '#019be5'
  }, button),
  goToHomePageButton: {
    marginTop: 5,
    fontSize: 18,
    color: '#2db5f9'
  }
})