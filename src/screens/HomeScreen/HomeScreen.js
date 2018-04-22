import React, { Component } from 'react'
import { View, Text, Button, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {GoogleSignin} from 'react-native-google-signin';

import { userLogout } from '../../store/actions/AuthActions';

class HomeScreen extends Component {
    constructor(props){
        super(props);
    }

    signOut() {
        GoogleSignin.signOut().then(() => {
            // Navigate
            this.props.userLogout()
            this.props.navigator.push({
                screen: 'react-native-sample.LogoutScreen',
                title: 'Logout Screen'
              });
        }).catch( error => {
            console.log('Error:', error)
       });
    }

    render(){
        return (
            <View>
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: this.props.image}}
                />
                <Text>{this.props.name}</Text>
                <Button title="Sign Out" onPress={this.signOut.bind(this)}/>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        name: state.auth.user.name,
        image: state.auth.user.photo
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ userLogout }, dispatch);
}
  

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

// export default HomeScreen