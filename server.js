const express = require('express')
const mongoose = require('mongoose')
const vechileRoutes = require('./controllers/vehicle')
require('dotenv').config()
const app = express()

//middleware
app.use(express.json())

app.use('/vehicle', vechileRoutes)


app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.get('/about', (req, res) => {
    res.send('about Page')
  })

// database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))

module.exports = app;