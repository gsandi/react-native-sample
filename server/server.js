// Imports
const express = require('express');
const bodyParser = require('body-parser');
const gcm = require('node-gcm');
const moment = require('moment');

// Constants and Variable Declarations
const apiKey = 'AIzaSyDmH_mE7HXixU7MFWE0jPbu2smhnryOCAY';
const serverKey = 'AAAA4Q9wHpI:APA91bEOlM-oOEfxDsPTY7evEh9a4Pjhshttu3ezFvFHZIUNFtaSpuF388QpbG-wzEJP0UNJT6WmOoXXItYFz7fXMz9lnDrUBzwShIFbiXjsQgR7iqX_9B7yCDVUBAPQmrY435ECk0ng';
const sender = new gcm.Sender(apiKey);
let message = new gcm.Message();
let registrationIds;
moment.locale();

// App Configuration
const app = express();
app.use(bodyParser.json());
/**
 * @param { '/getnotification', (req, res, next) }
 * @name get
 * @description 
 *     serve notification when route is fetched
 */
app.get('/getnotification', (req , res, next) => {
    message.addData('time', moment().format('LT'));
    message.delay_while_idle = 1;
    sender.send(message, registrationIds, 4, function (err, result) {
      console.log(error);
      console.log(result);
    });
    next()
})
/**
 * @param { '/', (req, res, next) }
 * @name post
 * @description 
 *     Add Token to registeredID's for future use
 */
app.post('/', (req , res, next) => {
    if(!req.body.token) {
      return res.status(400)
    }
    registrationIds = [req.body.token];
    next()
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}`))