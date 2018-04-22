import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

class LogoutScreen extends Component {
    constructor(props){
        super(props);
        this.logBackIn = this.logBackIn.bind(this);
    }

    static navigatorStyle = {
        drawUnderNavBar: true,
        navBarComponentAlignment: 'center', // center/fill
        navBarTitleTextCentered: true, // default: false. centers the title.
    };

    logBackIn(){
        this.props.navigator.push({
            screen: 'react-native-sample.LoginScreen',
            title: 'React Native Sample',
            animated: true,
            animationType: 'fade',
            navigatorButtons: {
              leftButtons: [
                {}
              ]
            }
          });
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.message}>GoodBye, Hope to see you again!</Text>

                <TouchableOpacity style={styles.button} onPress={this.logBackIn}>
                    <Text style={styles.buttonText}>Log back in?</Text>
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
export default LogoutScreen