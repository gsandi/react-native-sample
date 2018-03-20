import React, { Component } from 'react';
import {
  Dimensions,
  View,
  Button,
  Image
} from 'react-native';
import GoogleSignIn from 'react-native-google-sign-in';
import PopupDialog, {
  SlideAnimation,
  DialogTitle
} from 'react-native-popup-dialog';
import axios from 'axios';
import Orientation from 'react-native-orientation';
import OneSignal from 'react-native-onesignal';
import styles from './styles';
import WelcomeComponent from '../../components/WelcomeComponent';
import ButtonComponent from '../../components/ButtonComponent';
import { yourLocalIpAddress } from '../../config/api';

//Changing the background image as per the time of the day.
const backgrounds = {
  Morning: (Morning = require('../../assets/Morning.jpg')),
  Afternoon: (Afternoon = require('../../assets/Afternoon.png')),
  Evening: (Evening = require('../../assets/Evening.jpg'))
};

//Used for the Logout button.
const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom'
});

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class HomeScreen extends Component {
  state = {
    user: {},
    oneSignalUserId: '',
    deviceWidth: width,
    deviceHeight: height,
    pushResult: null
  }
// Listen for Ids event

  componentWillMount() {
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentDidMount() {
    // Read the params from navigation state
    this.setState({
      user: this.props.navigation.state.params.user
    });

// Check if orientation changed
    Orientation.addOrientationListener(this.orientationDidChange);
  }
//setting the user's ID (device ID) to be used for Push Notifcation
  onIds = ({ userId }) => {
    this.setState({ oneSignalUserId: userId });
  }

  // Adjusting the height and width according to the current orientation
  orientationDidChange = orientation => {
    if (orientation === 'LANDSCAPE') {
      this.setState({
        deviceWidth: height,
        deviceHeight: width
      });
    } else if (orientation === 'PORTRAIT') {
      this.setState({
        deviceWidth: width,
        deviceHeight: height
      });
    }
  }

//Sign out function
  handleSignOutPress = async () => {
    await GoogleSignIn.signOut();
    this.popupDialog.show();
  }

//function to determine how to greet the user
  handleGreeting = () => {
    const today = new Date();
    const curHr = today.getHours();
    let greeting = '';

    if (curHr < 12) {
      greeting = 'Morning';
    } else if (curHr < 18) {
      greeting = 'Afternoon';
    } else {
      greeting = 'Evening';
    }
    return greeting;
  }

//Call the local mock server for sending push notiication
  handleSendPush = () => {
    const { oneSignalUserId } = this.state;
    if (oneSignalUserId) {
      axios
        .post(`http://${yourLocalIpAddress}:3000/push`, {
          oneSignalUserId
        })
        .then(res => {
          this.setState({ pushResult: res });
        })
        .catch(err => {
          this.setState({ pushResult: err });
        });
    }
  }

//Display the UI elements
  render() {
    const {
      container,
      background,
      containerStyle,
      dialogueStyle
    } = styles;

    const { user: { givenName, photoUrlTiny } } = this.state;

    const imageSource = this.handleGreeting();

    return (
      <View style={container}>
        <Image
          style={[
            background,
            {
              width: this.state.deviceWidth,
              height: this.state.deviceHeight
            }
          ]}
          source={backgrounds[imageSource]}
        />

        <WelcomeComponent
          name={givenName}
          photoUrl={photoUrlTiny}
          handleGreeting={this.handleGreeting}
        />

        <ButtonComponent onPress={() => this.handleSendPush()}>
          Send Push Notification
        </ButtonComponent>

        <View>
          <ButtonComponent onPress={() => this.handleSignOutPress()}>
           Sign Out
          </ButtonComponent>
        </View>

        <PopupDialog
          containerStyle={containerStyle}
          width={0.7}
          height={100}
          dismissOnTouchOutside={false}
          dismissOnHardwareBackPress={false}
          dialogTitle={<DialogTitle title="Bye!..See You Soon" titleTextStyle={dialogueStyle} />}
          ref={popupDialog => {
            this.popupDialog = popupDialog;
          }}
          dialogAnimation={slideAnimation}
        >
          <View>
            <Button
            onPress={() => this.props.navigation.goBack()}
            title="OK"
            color="#f97171"
            />
          </View>
        </PopupDialog>
      </View>
    );
  }
}

export default HomeScreen;
