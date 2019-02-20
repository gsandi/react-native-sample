var gcm = require('node-gcm');
var express = require('express');
var bodyParser = require('body-parser');
// var moment = require('moment')
const port = 3000
 
// Set up the sender with your GCM/FCM API key (declare this once for multiple messages)
const sender = new gcm.Sender('AAAA6zsuuxs:APA91bFw3HAiYfIosrkL286t6bbK-q3jNpYSEltD_JnKpNwP1pNt5-hbN1uIhQS9-OPagMHamsBzLHeSJLheOGVeAuFJEFS3FJH5jfiGrs9P8NlP9n9qOEYB3jeQcwXxoLeZ4ZxjqAiq');
 
// Prepare a message to be sent
//const moment =moment();
const app = express();
app.use(bodyParser.json());
let message = new gcm.Message();
 
// Specify which registration IDs to deliver the message to
//let registrationIds = ["cNJh26dYBl8:APA91bFwkBx9U_JX50y9s5C91fRrBMVUVA9nSoE5AL7V-yt78XGAKGYKd1YmNG2NCgle9wnSvI0F9HPo1RUWLBRtfCnGv_bXqfzLFLEHssddpxuCaQX0rrg0HAg9H2WItV_Cxw1GkB6x"];
 
// Actually send the message
// app.get('/get-notification', function(req , sender){
//     // message.addData('title','The Time is:');
//     // message.addData('time');
//     // message.delay_while_idle = 1;
//     sender.send('hello');
// })
app.get('/get-notification', function(res){
    message.addData('title','The Time is:');
  sender.send(message, registrationIds, 4, function (err, result) {
    console.log(result);
    console.log(message);
    
  });
  res.send('i m here');
//   next()
})
  
//   app.post('/', (req , res, next) => {
//     console.log(req.body.token)
//     if(!req.body.token) {
//       return res.status(400)
//     }
//       registrationIds = [req.body.token]; //Since we have 1 user :) 
//     next()
//   })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
  