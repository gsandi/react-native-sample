import express from 'express';
import bodyParser from 'body-parser';
import gcm from 'node-gcm';
import moment from 'moment';

const app = express();

app.use(bodyParser.json());

const apiKey = 'AIzaSyCqMkYrSep6bhnT2Fst-8o6tNFd1vbmdeY';
const sender = new gcm.Sender(apiKey);
let message = new gcm.Message();

message.addData('title','The Time is:');
message.addData('time', moment().format('hh:mm A'));
message.delay_while_idle = 1;

let registrationIds;

app.get('/get-notification', (req , res, next) => {
  console.log(registrationIds)
  sender.send(message, registrationIds, 4, function (err, result) {
    console.log(result);
  });
  next()
})

app.post('/', (req , res, next) => {
  if(!req.body.token) {
    return res.status(400)
  }
    registrationIds = [req.body.token]; //Since we have 1 user :) 
  next()
})

const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
