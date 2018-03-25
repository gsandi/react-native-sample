import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { NativeRouter, Switch, Route, Redirect } from 'react-router-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './client/redux/reducer'
import { Icon } from 'react-native-elements'
// component imports
import Login from './client/components/login/Login'
import Welcome from './client/components/welcome/Welcome'
import MyHeader from './client/components/myHeader/MyHeader'

const store = createStore(reducer)

export default class App extends React.Component {

    render() {
        return (
            <NativeRouter>
                <Provider store={store}>
                    <View style={styles.container}>
                        <MyHeader />
                        <View style={styles.content}>
                            <Switch>
                                <Route exact path="/" component={WelcomeRedirect} />
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/welcome" component={Welcome} />
                            </Switch>
                        </View>
                    </View>
                </Provider>
            </NativeRouter>
        )
    }


}

const WelcomeRedirect = (props) => {
    console.log('welcome redirect')
    return <Redirect to="/welcome" />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center'
    },
});
