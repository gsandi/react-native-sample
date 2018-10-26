const express = require('express');
const bodyParser = require('body-parser');
const gcm = require('node-gcm');
const moment = require('moment');

// Constants and Variable Declarations
const apiKey = 'AIzaSyAlPaMFQv7TyMO4SM1wdP60wiSDDxqynns';
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
  console.log("helpp");
    message.addData('time', moment().format('LT'));
    message.delay_while_idle = 1;
    sender.send(message, registrationIds, 4, function (result) {
      console.log(result);
    }
    );
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

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))