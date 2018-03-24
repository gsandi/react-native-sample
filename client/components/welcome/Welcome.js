import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Button } from 'react-native'
import { Link } from 'react-router-native'
import { connect } from 'react-redux'
import { loggedOut } from '../../redux/actions'
import axios from 'axios'
import { AsyncStorage } from "react-native"
import { PUSH_NOTI_TOKEN } from '../../utils/constants'

class Welcome extends Component {

    render() {
        const { loggedIn, user } = this.props
        let content = null
        const loggedOutContent = <View><Text>Not logged in.</Text></View>
        if (loggedIn) content = (
            <View>
                <Text>{`Welcome ${user.name}`}</Text>
                <TouchableHighlight style={styles.mybtn} onPress={this.pushNotification.bind(this)}><Text style={styles.btnText}>Push Notification</Text></TouchableHighlight>
            </View>
        )
        else content = loggedOutContent
        return (
            <View>
                <Text>Welcome page</Text>
                {content}
                <Button title="Go to Login" onPress={() => this.props.history.push('/login')} />
                <TouchableHighlight style={styles.mybtn} onPress={this.logout.bind(this)}><Text style={styles.btnText}>Logout</Text></TouchableHighlight>
            </View>
        )
    }

    logout() {
        console.log('clicked logout')
        this.props.dispatchLogout()
        this.props.history.push('/login')
    }

    async pushNotification() {
        console.log('clicked push notification')
        try {
            const token = await AsyncStorage.getItem(PUSH_NOTI_TOKEN)
            if (token !== null) {
                console.log(token)
                axios.post('http://192.168.42.230:5000/api/push-notifications/notify-time', { token })
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => console.error(err))
                // const msg = {
                //     to: token,
                //     sound: 'default',
                //     body: `Your local date/time is ${new Date().toLocaleString()}`
                // }   
                // const options = {
                //     headers: {'accept': 'application/json', 'accept-encoding': 'gzip, deflate', 'content-type': 'application/json'}
                // }             
                // axios.post('https://exp.host/--/api/v2/push/send', msg, options)
                //     .then(res => {
                //         console.log(res)
                //     })
                //     .catch(e => console.error(e))
            }
        }
        catch (e) { console.error(e) }
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
        backgroundColor: 'teal',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center'
    },
    btnText: {
        color: 'whitesmoke'
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Welcome)
