const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

//Create an instance of the express server
const app = express();

app.use(bodyParser.json());

// visit localhost:3000/test from browser to make sure server is running
app.get('/test', (req, res) => {
  res.send('Server is ready to send push notifications!');
});

//push notication
app.post('/push', async (req, res) => {
  const currentTime = new Date().toString();

//Setting the headers to call the OneSignal REST API
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: 'Basic MTY1NzY0MzItOTFkOS00ZDViLWIxN2ItYzY4ZWRlOWU1ODAz'
  };

//Setting the body for the API, along with the device ID to whom
//the notification must be sent.
  const body = {
    app_id: '8b7bbc52-fa66-4daa-92fc-ce57e3216402',
    contents: { en: currentTime },
    include_player_ids: [req.body.oneSignalUserId]
  };

  const config = {
    headers
  };

//Call to the REST API with the headers and the body
  try {
    const response = await axios.post(
      'https://onesignal.com/api/v1/notifications',
      body,
      config
    );

    res.status(200).send({ response });
  } catch (error) {
    res.status(422).send({ error });
  }
});

app.listen(3000, () => console.log('App listening on port 3000!'));
