import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser());

app.post('/', (req , res, next) => {
  console.log(req.body)
  res.send('hello world')
  next()
})

const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
