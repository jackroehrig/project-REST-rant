// Environment Variables
require('dotenv').config()

// Require Modules
const express = require('express')

// Create Express App
const app = express()

// Constants and Environment Variables
const PORT = process.env.PORT

// Main Page
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Wildcard Route
app.get('*', (req, res) => {
    res
        .status(404)
        .send(`
        <h1>404 Page</h1>
    `)
})

// Setting localhost Port
app.listen(PORT)