// DEPENDENCIES
const express = require('express')
const bodyParser = require('body-parser')

// CONFIGURATION
const router = express.Router()
const places = require('../models/places.js')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// ROUTES
router.get('/', (req, res) => {
    res.render('places/index', { places })
})

let nextId = 5;

router.post('/', urlencodedParser, (req, res) => {
    let newPlace = req.body
    newPlace.id = nextId
    nextId++
    places.push(newPlace)
    res.redirect('/places')
})

router.get('/new', (req, res) => {
    res.render('places/new_place')
})

router.get('/:id', (req, res) => {
    let placeId = req.params.id
    res.render('places/info_page', { placeId, places } )
})

router.put('/:id', urlencodedParser, (req, res) => {
    console.log(req.body)
})

router.get('/:id/edit', (req, res) => {
    let placeId = req.params.id
    res.render('places/edit_place', { placeId, places })
})

// EXPORT
module.exports = router