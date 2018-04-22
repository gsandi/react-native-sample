import React, { Component } from 'react'
import { View, Text, Button, Image } from 'react-native';
import { connect } from 'react-redux';

class HomeScreen extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View>
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: this.props.image}}
                />
                <Text>{this.props.name}</Text>
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

export default connect(mapStateToProps)(HomeScreen)

// export default HomeScreen