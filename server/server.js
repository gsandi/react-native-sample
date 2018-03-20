const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// use mws
app.use(bodyParser.json())



const port = process.env.PORT || 5000
app.listen(() => console.log(`Magic happening on port ${port}`))