const router = require('express').Router()
//import Expo from 'expo-server-sdk'
const Expo = require('expo-server-sdk')
const expo = new Expo()
const gcm = require('node-gcm')

// router.post('/notify-time', async (req, res) => {
//     console.log(req.body)
//     const { token } = req.body
//     if (!Expo.isExpoPushToken(token)) res.send('Push token not valid')
//     const msg = {
//         to: token,
//         sound: 'default',
//         body: `Your local date/time is ${new Date().toLocaleString()}`
//     }    
//     let receipt = await expo.sendPushNotificationAsync(msg)
//     res.json(receipt)
// })

router.post('/notify-time', async (req, res) => {
    console.log(req.body)
    const sender = new gcm.Sender('AIzaSyDitVln37J2Ofu7ML4m_FfzfZJhJtAmOcY')
    const msg = new gcm.Message({
        notification: {
            title: 'Push Notification',
            body: `Your local date/time is ${new Date().toLocaleString()}`
        }
    })
})


module.exports = router