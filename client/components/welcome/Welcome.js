import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'react-router-native'
import { Button } from 'react-native-elements'

class Welcome extends Component {
    render() {
        return (
            <View>
                <Text>Welcome page</Text>
                <Button title="Login Test" onPress={() => this.props.history.push('/login')} />
            </View>
        )

    }
}

export default Welcome
