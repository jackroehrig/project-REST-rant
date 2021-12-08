const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pic: {type: String, default: '/images/hamburger.jpg'},
    cuisines: {type: String, required: true},
    city: String,
    state: {type: String, default: 'USA'},
    founded: {
        type: Number,
        min: [1673, 'Surely not that old?'],
        max: [new Date().getFullYear() + 3, 'Hey, this year is too far in the future!']
    }
})

placeSchema.methods.showEstablished = function (){
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`
}

module.exports = mongoose.model('Place', placeSchema)
