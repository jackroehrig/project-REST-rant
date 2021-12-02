// Requiring Modules
const express = require('express')

// Setup Route
const router = express.Router()

// Main places page
router.get('/', (req, res) => {
    res.send('GET /places')
})


// Export Route
module.exports = router