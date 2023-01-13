const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const todos = require('./routes/api/todos')

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

//routes
app.use('/api/todos', todos)

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`server is connected on port ${port}`))
