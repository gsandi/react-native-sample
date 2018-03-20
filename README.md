## react-native-sample
Basic app where users can login to the app using their Google accounts.
Send and receive Notification of the current time from the server

## Instructions for installation
### 1. IP Address Change instructions
- Clone the repo to your computer and Open the project in your editor
- Open api.js under app/config folder
- Change value of 'yourLocalIpAddress' variable to your local ip address and save the file
- (you can find it by running ifconfig or ipconfig depending on your host OS)

### 2. Server instructions
 - Open your terminal and cd to LoginNPush project
 - run `cd server`
 - run `yarn install` (this should install all the dependencies needed for server)
 - (if it dosesnt work then you can install Yarn through the Homebrew package manager
    run `brew install yarn`)
 - run `yarn start` to start the server


### 3. Android app instructions
  -  Open a new terminal and go to the LoginNPush folder
  -  Run `yarn install`
  -  Run your android emulator
  -  In your terminal run `react-native run-android` (this should build and deploy app to your android emulator or connected device)

After instructions above you should be successfully sending and receiving push notifications

