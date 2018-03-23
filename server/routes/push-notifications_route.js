const router = require('express').Router()

router.post('/notify-time', async (req, res) => {
    console.log(req.body)
    const { token } = req.body
    const msg = {
        to: token,
        sound: 'default',
        body: `Your local date/time is ${new Date().toLocaleString()}`
    }    
    res.json(receipt)
})


module.exports = router