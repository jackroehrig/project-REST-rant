// DEPENDENCIES
const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const db = require('../models')

// CONFIGURATION
const router = express.Router()
// CHANGE EXTENDED?
router.use(bodyParser.urlencoded({ extended: false }))
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

router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        if(err && err.name == 'ValidationError'){
            let message = 'Validation Error: '
            let unfinishedForm = req.body
            
            for (var field in err.errors){
                message += `${field[0].toUpperCase()}${field.slice(1)} was ${err.errors[field].value}. `
                message += `${err.errors[field].message}`
                delete unfinishedForm[field]
            }
            
            res.render('places/new_place', {message, unfinishedForm})
        } else {
            res.render('error404')
        }
    })
})

router.get('/new', (req, res) => {
    res.render('places/new_place')
})

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
        res.render('places/info_page', {place})
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})

router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(updatedPlace => {
        res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})

router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/edit_place', {place})
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})

router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
    .then(deletedPlace => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})

router.post('/:id/comment', (req, res) => {
    req.body.rant = req.body.rant ? true : false
    db.Place.findById(req.params.id)
    .then(place => {
        db.Comment.create(req.body)
        .then(comment => {
            place.comments.push(comment.id)
            place.save()
            .then(() => {
                res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})

// EXPORT
module.exports = router