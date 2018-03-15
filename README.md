# react-native-sample
    A basic app built using react-native and express.js, users can login to the app using their Google accounts, after the login is successful, there will be a welcome message with the user name, user's photo and 2 buttons, one for getting the current local time as a notification to the device from GCM triggered by the app server, and the other is for signing out from the app.

### **Technologies:** 
    React native, Express.js, react-native-google-signin

### **Installation:** 
1. clone this repo.
2. on terminal `cd react-native-sample`
3. `cd server && npm install`
4.  `npm start`
note: if  `npm start` didn't work, run  
`node_modules/nodemon/bin/nodemon.js -- node_modules/babel-cli/bin/babel-node.js server.js`
5. Then run `cd .. && cd Test`
6. `npm install`
7. get your android emulator ready
8. `react-native run-android`

### **References:**
1. react-native facebook 
2. Stack Overflow
3. mdn 
4. other blogs 
