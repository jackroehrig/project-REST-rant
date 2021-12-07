// DEPENDENCIES
const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const db = require('../models')

// CONFIGURATION
const router = express.Router()
// CHANGE EXTENDED?
const urlencodedParser = bodyParser.urlencoded({ extended: false })
router.use(methodOverride('_method'))

// ROUTES
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
        res.render('places/index', { places })    
    })
    .catch(err => {
        console.log(err)
        res.render("error404")
    })
})

router.post('/', urlencodedParser, (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})

router.get('/new', (req, res) => {
    res.render('places/new_place')
})

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    // isNaN(id)
    // to do
})

router.put('/:id', urlencodedParser, (req, res) => {
    let id = req.params.id
    // to do
    res.redirect(`/places/${id}`)
})

router.get('/:id/edit', (req, res) => {
    let id= req.params.id
    res.render('places/edit_place', /* to do */)
})

router.delete('/:id', (req, res) => {
    let id = req.params.id
    // to do
    // if(isNaN(id)){
})

// EXPORT
module.exports = router