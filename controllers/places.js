// DEPENDENCIES
const express = require('express')
const bodyParser = require('body-parser')

// CONFIGURATION
const router = express.Router()
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// MOCK DATA
let places = [{
    name: 'Draft House',
    pictureLink: '/images/hamburger.jpg',
    city: 'Verona',
    state: 'WI',
    cuisineType: 'Bar Food/American',
    id: 1
}, {
    name: 'Hubbard Avenue',
    pictureLink: '/images/pizza.jpg',
    city: 'Middleton',
    state: 'WI',
    cuisineType: 'Classic American Diner',
    id: 2
}, {
    name: 'Rare Steakhouse',
    pictureLink: '/images/pancakes.jpg',
    city: 'Madison',
    state: 'WI',
    cuisineType: 'Fancy Steakhouse',
    id: 3
}, {
    name: "Ian's Pizza",
    pictureLink: '/images/salmon.jpg',
    city: 'Madison',
    state: 'WI',
    cuisineType: 'Pizza Place',
    id: 4
}]

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