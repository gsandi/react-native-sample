import { Permissions, Notifications } from 'expo'
import { AsyncStorage } from "react-native"
import { PUSH_NOTI_TOKEN } from "../../utils/constants"

const registerForPushNotifications = async () => {
    try {
        // get existing permissions
        const { status:existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS)
        let finalStatus = existingStatus // status var holder
    
        // ask for permission once if not yet granted
        if (existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
            finalStatus = status
        }
    
        if (finalStatus !== 'granted') return // permission still hasnt been granted, exit
    
        let token = await Notifications.getExpoPushTokenAsync() // get token for push notifications
        await AsyncStorage.setItem(PUSH_NOTI_TOKEN, token)
    }
    catch (e) { console.error(e) }
}

export default registerForPushNotifications