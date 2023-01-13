const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

//body-parser moddleware
app.use(bodyParser.json())

// configure mongoDB
const db = require('./configure/keys').mongoURI

//connect mongoDB
mongoose.set('strictQuery', false)
mongoose
  .connect(db)
  .then(() => console.log('mongoDB is connected'))
  .catch(err => console.log(err))

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`server is connected on port ${port}`))
