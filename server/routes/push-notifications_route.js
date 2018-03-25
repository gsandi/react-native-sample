const router = require('express').Router()
const gcm = require('node-gcm')

router.post('/notify-time', async (req, res) => {
    console.log(req.body)
    let error = {status:false,err:null}
    try {
        const {regToken} = req.body
        const sender = new gcm.Sender('AAAAcdsXYWk:APA91bEZ4dr5bAARWwxuBO4ZjZbv7fxwedsNPuTmQ3s9elh3mLNvW4JjzqSDAENBLwZpvuASjwydvlrhdvmGc7dM4qEd_GXyeoeovHwk0NVU7P6M1WYr_V6i0wZJIXVBWhj2MIMA6HV0')
        const msg = new gcm.Message({
            data: {
                title: 'React Native Sample',
                body: `Your local date/time is ${new Date().toLocaleString()}`,
                icon: 'ic_launcher',
                priority: 'high',
                delayWhileIdle: true,
                message: `Your local date/time is ${new Date().toLocaleString()}`,
            },
            collapseKey: 'rns',
            timeToLive: 5,
            priority: 'high'
        })
        sender.send(msg, {to:regToken}, (err, receipt) => {
            console.log('send called')
            if (err) {
                console.error('Error occurred',err)
                error = {status:true,err}
            }
            else {
                console.log('Message sent')
            }
            if (error.status) res.json({status:'Error occurred', error:error.err})
            else res.json({status:'Message sent', receipt})
        })
    }
    catch (e) {
        console.error(e)
        res.json(e)
    }
})


module.exports = router