// DEPENDENCIES
const express = require('express')
const bodyParser = require('body-parser')

// CONFIGURATION
const router = express.Router()
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// ROUTES
router.get('/', (req, res) => {
    let places = [{
        name: 'Draft House',
        pic: 'https://drafthouseverona.com/wp-content/uploads/sites/82/2019/04/drafthouse_1.jpg',
        city: 'Verona',
        state: 'WI',
        cuisineType: 'Bar Food/American'
    }, {
        name: 'Hubbard Avenue',
        pic: 'https://cdn.usarestaurants.info/assets/uploads/490eea2f35094153bf180c66308e5876_-united-states-wisconsin-dane-county-middleton-hubbard-avenue-diner-608-831-6800htm.jpg',
        city: 'Middleton',
        state: 'WI',
        cuisineType: 'Classic American Diner'
    }, {
        name: 'Rare Steakhouse',
        pic: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/madison/RARE_Library00-f0efadd85056a36_f0efaf2d-5056-a36a-08e87be1e5684fed.jpg',
        city: 'Madison',
        state: 'WI',
        cuisineType: 'Fancy Steakhouse'
    }, {
        name: "Ian's Pizza",
        pic: 'https://ianspizza.com/wp-content/uploads/2020/09/Ians-Pizza_Garver-Feed-Mill_1200w.jpg',
        city: 'Madison',
        state: 'WI',
        cuisineType: 'Pizza Place'
    }]
    res.render('places/index', { places })
})

router.post('/', urlencodedParser, (req, res) => {
    createPlacesCard(req.body)
})

router.get('/new', (req, res) => {
    res.render('places/new_place')
})

// FUNCTIONS
function createPlacesCard(placeObj){
    for(key in placeObj){
        console.log(`${key} is ${placeObj[key]}`)
    }
}

// EXPORT
module.exports = router