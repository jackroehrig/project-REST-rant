// DEPENDENCIES
const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

// CONFIGURATION
const router = express.Router()
const places = require('../models/places.js')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
router.use(methodOverride('_method'))

// ROUTES
router.get('/', (req, res) => {
    res.render('places/index', { places })
})

let nextId = 4;

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
    let id = Number(req.params.id)
    isNaN(id) 
        ? res.render('error404') 
        : !places[id]
        ? res.render('error404')
        : res.render('places/info_page', { place: places[id] })
})

router.put('/:id', urlencodedParser, (req, res) => {
    let id = req.params.id
    for(key in req.body){
        places[id][key] != req.body[key] ? places[id][key] = req.body[key] : null
    }
    res.redirect(`/places/${id}`)
})

router.get('/:id/edit', (req, res) => {
    let id= req.params.id
    res.render('places/edit_place', { place: places[id] })
})

router.delete('/:id', (req, res) => {
    let id = req.params.id
    if(isNaN(id)){
        res.render('error404') 
    } else if(!places[id]) {
        res.render('error404')
    } else {
        places.splice(id, 1) 
        res.redirect('/places')
    }
})

// EXPORT
module.exports = router