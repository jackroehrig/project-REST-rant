// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// ROUTES
app.get('/', (req, res) => {
    res.render('home')
})

app.use('/places', require('./controllers/places'))

app.get('*', (req, res) => {
    res
        .status(404)
        .render('error404')
})

// LISTEN
app.listen(PORT)