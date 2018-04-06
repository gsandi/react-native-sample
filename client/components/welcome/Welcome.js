import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight, Button, Animated } from 'react-native'
import { Link } from 'react-router-native'
import { connect } from 'react-redux'
import { loggedOut } from '../../redux/actions'
import axios from 'axios'
import { PUSH_NOTI_TOKEN } from '../../utils/constants'
import { NativeModules } from 'react-native'
import { Text } from "react-native-elements"

class Welcome extends Component {

    constructor(props) {
        super(props)
        this.state = {
            rightOpacityAnim: new Animated.Value(0),
            leftOpacityAnim: new Animated.Value(0),
        }
    }

    componentWillMount() {
        if (!this.props.loggedIn) this.animateOpacity()
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.loggedIn && !nextProps.loggedIn) window.setTimeout(() => this.animateOpacity(), 5000)
    }

    render() {
        const { rightOpacityAnim, leftOpacityAnim } = this.state
        const { loggedIn, user } = this.props
        let content = null
        const loggedOutContent = (
            <View>
                <Text h4>You are not signed in.</Text>
                {/* <Text style={{fontSize:18}}>Click the icon in the top right to sign in/out.</Text>
                <Text style={{fontSize:18}}>Click the icon in the top left to nav here.</Text> */}
                <Animated.Text style={{opacity:rightOpacityAnim, fontSize:16}}>Click the icon in the top right to sign in/out.</Animated.Text>
                <Animated.Text style={{opacity:leftOpacityAnim, fontSize:16}}>Click the icon in the top left to nav here.</Animated.Text>
            </View>
        )
        if (loggedIn) content = (
            <View>
                <Text style={{fontSize:20}}>{`Good ${this.determineTime()} ${user.name}.`}</Text>
                <TouchableHighlight style={styles.mybtn} onPress={this.pushNotification.bind(this)}><Text style={styles.btnText}>Push Notification</Text></TouchableHighlight>
                <Text style={{fontSize:16}}>Logout with the icon on top right.</Text>
            </View>
        )
        else content = loggedOutContent
        return (
            <View>
                <Text h1>Welcome!</Text>
                {content}
            </View>
        )
    }

    //10.0.2.2
    async pushNotification() {
        console.log('clicked push notification')
        try {
            let regToken = await NativeModules.PushNotiToken.genToken()
            console.log(regToken)
            axios.post('http://10.0.2.2:5000/api/push-notifications/notify-time', {regToken})
                .then(res => {
                    console.log(res)
                })
                .catch(err => { console.error('ERROR_OCCURRED'); console.error(err); })
        }
        catch (e) { console.error(e) }
    }

    determineTime() {
        const hours = new Date().getHours()
        return hours > 5 && hours < 12 ? 'Morning' : 'Evening'
    }

    animateOpacity() {
        Animated.sequence([
            Animated.timing(this.state.rightOpacityAnim, {
                toValue: 1,
                duration: 2000,
            }),
            Animated.timing(this.state.leftOpacityAnim, {
                toValue: 1,
                duration: 2000,
            })
        ]).start()
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn,
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchLogout: () => dispatch(loggedOut())
    }
}

const styles = StyleSheet.create({
    mybtn: {
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: '#006a4d',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center'
    },
    btnText: {
        color: 'whitesmoke',
        fontSize: 16
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Welcome)
