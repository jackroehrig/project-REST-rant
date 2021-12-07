const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: String,
    pic: String,
    cuisines: String,
    city: String,
    state: {type: String, default: 'USA'},
    founded: Number
})

module.exports = mongoose.model('Place', placeSchema)
