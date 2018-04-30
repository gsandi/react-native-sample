import React, { Component } from 'react'
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { GoogleSignin } from 'react-native-google-signin';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { notification } from '../../components/notifications.js';
// import { PushNotification } from 'react-native-push-notification';
import { userLogout } from '../../store/actions/AuthActions';

var PushNotification = require('react-native-push-notification');


class HomeScreen extends Component {

    componentWillMount() {
        notification.init()
    }    

    static navigatorStyle = {
        drawUnderNavBar: true,
        navBarComponentAlignment: 'center', // center/fill
        navBarTitleTextCentered: true, // default: false. centers the title.
    };
    constructor(props){
        super(props);
        this.handleGreeting = this.handleGreeting.bind(this);
        this.signOut = this.signOut.bind(this);
    }

    handleGreeting(){
        const now = new Date();
        const currentHour = now.getHours();
        let message = '';
    
        if (currentHour >= 11) {
          message = 'Morning';
        } else {
          message = 'Evening';
        }
        return message;
    }

    signOut() {
        GoogleSignin.signOut().then(() => {
            // Navigate
            this.props.userLogout()
            this.props.navigator.push({
                screen: 'react-native-sample.LogoutScreen',
                title: '',
                animated: true,
                animationType: 'fade',
                navigatorButtons: {
                  leftButtons: [
                    {}
                  ]
                }
              });
        }).catch( error => {
            console.log('Error:', error)
       });
    }
    getNotification(){
        notification.postNotificationToken();
        notification.getTime();
    }

    render(){
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{uri: this.props.image}}
                />
                <Text style={styles.message}>Good {this.handleGreeting()}, {this.props.name}</Text>
                
                <TouchableOpacity style={styles.button} onPress={this.getNotification.bind(this)}>
                    <Text style={styles.buttonText}>Send Notification</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button} onPress={this.signOut}>
                    <Text style={styles.buttonText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5C6BC0'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#fff',
        marginBottom: 30,
    },
    message:{
        marginBottom: 30,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        fontSize: 20,
    },
    button: {
        height: 50,
        width: 200,
        backgroundColor: '#fff',
        borderRadius: 2,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 30, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'grey',
        fontSize: 14,
        fontWeight: '600',
    }
})

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