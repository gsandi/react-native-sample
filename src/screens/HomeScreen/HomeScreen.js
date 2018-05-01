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
    /**
     * @param { }
     * @name componenetWillMount
     * @description 
     *      Before the component is rendered, launch initialization of push notifications
     */
    componentWillMount() {
        notification.init()
    }  
    /**
     * @param { }
     * @name handleGreeting
     * @description 
     *      Based on the current time, generate a greeting for the user
     */
    handleGreeting(){
        const now = new Date();
        const currentHour = now.getHours();
        let message = '';
        if (currentHour < 12) {
          message = 'Morning';
        } else {
          message = 'Evening';
        }
        return message;
    }
    /**
     * @param { }
     * @name signOut
     * @description 
     *      Handles the user when they decide to log out.
     *      Removes user information from the application
     *      Redirects them to the logout screen.
     */
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

    /**
     * @param { }
     * @name getNotification
     * @description 
     *      Call notification functions from notifications utility
     */
    getNotification(){
        notification.postNotificationToken();
        notification.getTime();
    }

    /**
     * @param { }
     * @name render
     * @description 
     *      Render the Interface, must be wrapped in a single View or element.
     */
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

/**
 * @name mapStateToProps
 * @description 
 *      Gives access to specific parts of the global state within the store.
 *      Can use global state through props.
 */
const mapStateToProps = state => {
    return {
        name: state.auth.user.name,
        image: state.auth.user.photo
    }
}
/**
 * @name mapDispatchToProps
 * @description 
 *     Interface that passes relevant action creators to the component 
 *     This lets you send changes to the global state from any component within the application,
 *     rather than use redundant functions to send state data up and down the application tree.
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ userLogout }, dispatch);
}
  
/**
 * @name connect
 * @description 
 *     connect mapDispatchToProps, mapStateToProps, and LoginScreen to the global store.
 *     Only by dispatching actions can you change the state
 */
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

// export default HomeScreen