const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

// use mws
app.use(bodyParser.json())
app.use(morgan('dev'))

// mount routes
app.use('/api/push-notifications/', require('./routes/push-notifications_route'))


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Magic happening on port ${port}`))