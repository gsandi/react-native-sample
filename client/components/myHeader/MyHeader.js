import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux'
import { loggedIn, loggedOut } from "../../redux/actions"
import { Header, Icon, Overlay, Text } from 'react-native-elements'
import { withRouter } from "react-router-native"
import { GoogleSignin } from "react-native-google-signin"

const color = '#fff'

class MyHeader extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false,
            isVisible: false,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            if (nextProps.loggedIn) this.setState({loggedIn:true})
            else this.setState({loggedIn:false})
        }
    }
    
    render() {
        console.log(this.props)
        return (
            <View style={{marginBottom:100}}>
            <Header backgroundColor="#006a4d"
                leftComponent={{icon:'home', color, onPress:() => this.goToWelcome(), size:35}}
                centerComponent={{text:'React Native Sample', style:{color, fontSize:25}}} 
                rightComponent={this.rightComponent()} />
                <Overlay isVisible={this.state.isVisible} fullScreen={true} overlayBackgroundColor="#ccc">
                    <View style={{alignItems:'center'}}>
                        <Text h3 style={{color:'black'}}>Bye! See you soon.</Text>
                    </View>
                </Overlay>
            </View>                
        )
    }

    goToWelcome() {
        this.props.history.push('/welcome')
    }

    rightComponent() {
        return this.props.loggedIn ? <Icon name="logout" type='material-community' color={color} size={35} onPress={this.logout.bind(this)} /> : <Icon name="login" type='material-community' color={color} size={35} onPress={() => this.props.history.push('/login')} />
    }

    logout() {
        console.log('clicked logout')
        GoogleSignin.signOut()
            .then(() => console.log('user signed out'))
            .catch(err => console.error(err))
        this.props.dispatchLogout()
        this.setState({isVisible:true})
        window.setTimeout(() => this.setState({isVisible:false}), 5000)
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchLogout: () => dispatch(loggedOut())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyHeader))