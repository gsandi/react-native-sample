import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { NativeRouter, Switch, Route, Redirect } from 'react-router-native'
// component imports
import Login from './client/components/login/Login'
import Welcome from './client/components/welcome/Welcome'

export default class App extends React.Component {
    render() {
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <Switch>
                        <Route exact path="/" component={WelcomeRedirect} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/welcome" component={Welcome} />
                    </Switch>
                </View>
            </NativeRouter>
        )
    }
}

const WelcomeRedirect = (props) => <Redirect to="/welcome" />

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
