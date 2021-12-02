// DEPENDENCIES
const express = require('express')

// CONFIGURATION
const router = express.Router()

// ROUTES
router.get('/', (req, res) => {
    res.render('places/index')
})


// EXPORT
module.exports = router