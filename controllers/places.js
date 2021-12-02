// DEPENDENCIES
const express = require('express')

// CONFIGURATION
const router = express.Router()

// ROUTES
router.get('/', (req, res) => {
    res.send('GET /places')
})


// EXPORT
module.exports = router