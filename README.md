##React Native Sample

###Summary
This is a basic React Native application that allows the user to login with google authentication, send a push notification with the current time, and logout.
The layout of the application is as follows:

1. Login Screen
  * Initial screen the user sees upon entering the application.
  * When the user presses the Sign in button, the user will be directed to the Google Authentication Page where the user will sign in with their google account and give the application permissions to use their profile picture and name.

2. Home Screen
  * The Home screen has two buttons.
  * The Notification button will send the user an push notification with the current time and date.
  * The Logout button will sign the user out of the application.

3. Logout Screen
  * Upon logging out, a goodbye message is displayed on the screen.
  * A button is on the screen that will allow the user to be redirected to the Login screen to log back into the application.

![Alt Text](https://github.com/zacharylangley/react-native-sample/src/assets/screencap1.gif)

###Prerequisites

1. [Install Android Studio](https://developer.android.com/studio/)
2. [Install SDK and Emulator Prequisites](https://facebook.github.io/react-native/docs/getting-started.html)
3. [Install React Native](https://facebook.github.io/react-native/docs/getting-started.html)

###Installation
1. Open a Terminal or Terminal Emulator
2. `git clone https://github.com/ZacharyLangley/react-native-sample.git`
3. Navigate to repository `cd react-native-sample/`

###Server Instructions
1. Open a Terminal or Terminal Emulator
2. Navigate to server folder `cd server/`
3. Run `npm install`
4. Run `npm run start`
5. This opens up 10.0.2.2:5000 for the application

###Android Instructions
1. Open a Terminal or Terminal Emulator
2. Navigate to root directory `react-native-sample/`
3. Run `npm install`
4. Open the Android Virtual Device
5. Once on the home screen of the device, go to your Terminal
6. Run `npm run android` or `react-native run-android`

##Troubleshooting
* Be sure to have the Android Virtual Device open before building and running the application. React Native will not run it otherwise
* React Native is a new frontier for mobile applications and as such, errors can occur. Restart the application if necessary.
