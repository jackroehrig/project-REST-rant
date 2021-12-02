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
    pictureLink: 'https://drafthouseverona.com/wp-content/uploads/sites/82/2019/04/drafthouse_1.jpg',
    city: 'Verona',
    state: 'WI',
    cuisineType: 'Bar Food/American',
    id: 1
}, {
    name: 'Hubbard Avenue',
    pictureLink: 'https://cdn.usarestaurants.info/assets/uploads/490eea2f35094153bf180c66308e5876_-united-states-wisconsin-dane-county-middleton-hubbard-avenue-diner-608-831-6800htm.jpg',
    city: 'Middleton',
    state: 'WI',
    cuisineType: 'Classic American Diner',
    id: 2
}, {
    name: 'Rare Steakhouse',
    pictureLink: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/madison/RARE_Library00-f0efadd85056a36_f0efaf2d-5056-a36a-08e87be1e5684fed.jpg',
    city: 'Madison',
    state: 'WI',
    cuisineType: 'Fancy Steakhouse',
    id: 3
}, {
    name: "Ian's Pizza",
    pictureLink: 'https://ianspizza.com/wp-content/uploads/2020/09/Ians-Pizza_Garver-Feed-Mill_1200w.jpg',
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
    res.render(`places/info_page`, { placeId, places } )
})

// EXPORT
module.exports = router