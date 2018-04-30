import PushNotification from 'react-native-push-notification'

let token;

export const notification = {
    init() {
        PushNotification.configure({
            onRegister: function(token) {
                console.log('TOKEN: ', token);
                token = token;
            },

            onNotification: function(notification) {
                console.log('NOTIFICATION: ', notification);
                if(!notification.foreground) return;
                PushNotification.localNotification({
                    title: notification.title,
                    message: notification.time
                });
            },
            senderID: '966626647698'
        });
    },
    postNotificationToken() {
        fetch('http://10.0.2.2:5000/', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(token)
      })
    },
    getTime() {
        console.log('GET CURRENT TIME');
        fetch('http://10.0.2.2:5000/getnotification')
        .then(function(response){
            PushNotification.localNotification({
                title: 'React-Native-Sample',
                message: response.headers.map.date[0],
            });

            return response;
        })
        .catch(function(error){
            console.log(error.message);
            throw error;
        });
    }
};