import PushNotification from 'react-native-push-notification';


export const pushNotification = {
    init() {
        
        PushNotification.configure({
            onRegister: function(generatedToken) {
                console.log("i got here")
                debugger;
                console.log("jjj"+ generatedToken.token.toString())
            },

            onNotification: function(notification) {
                console.log('NOTIFICATION: ', notification);

                if(!notification.foreground) return;
                
                PushNotification.localNotification({
                    title: notification.title,
                    message: notification.time
                });
            },

            senderID: "1010310232859",
            requestPermissions: true,
            popInitialNotification: true,

        });
    },
//     postToken() {
//         fetch('https://localhost:3000/', {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(token)
//       })
//     },
//     getCurrentTime() {
//         console.log('GET CURRENT TIME');
//         fetch('https://localhost:3000/get-notification')
//     }
 };