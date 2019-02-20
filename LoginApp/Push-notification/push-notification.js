import PushNotification from 'react-native-push-notification';

let token;

export const pushNotification = {
    init() {
        
        PushNotification.configure({
            onRegister: function(generatedToken) {
                console.log("i got here");
                token = generatedToken;
                console.log(token);
            },

            onNotification: function(notification) {
                console.log('NOTIFICATION: ', notification);

                if(!notification.foreground) return;
                
                PushNotification.localNotification({
                    title: notification.title,
                    message: notification.time
                });
            },

            senderID: "863721276192",
            requestPermissions: true,
            popInitialNotification: true,

        });
    },
    // postToken() {
    //     fetch('https://localhost:5000/', {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(token)
    //   })
    // },
    // getCurrentTime() {
    //     console.log('GET CURRENT TIME');
    //     fetch('https://localhost:5000/get-notification')
    // }
};