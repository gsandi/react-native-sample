import PushNotification from 'react-native-push-notification'

let token;

export const pushNotification = {
    init() {
        PushNotification.configure({
            onRegister: function(generatedToken) {
                token = generatedToken;
            },

            onNotification: function(notification) {
                if(!notification.foreground) return;
                
                PushNotification.localNotification({
                    title: notification.title,
                    message: notification.time
                });
            },

            senderID: "1096237688973",
        });
    },
    postToken() {
        fetch('http://10.0.2.2:3000/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(token)
      })
    },
    getCurrentTime() {
        fetch('http://10.0.2.2:3000/get-notification')
    }
};

    
