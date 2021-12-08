const db = require('../models')

db.Place.create([{
    name: "Draft House Bar",
    pic: "/images/hamburger.jpg",
    city: "Verona",
    state: "WI",
    cuisines: "Classic American/Bar Food",
    founded: 2004
}, {
    name: "Hubbard Avenue",
    pic: "/images/pancakes.jpg",
    city: "Middleton",
    state: "WI",
    cuisines: "Diner",
    founded: 1999
}, {
    name: "Rare Steakhouse",
    pic: "/images/salmon.jpg",
    city: "Madison",
    state: "WI",
    cuisines: "Upscale Steakhouse",
    founded: 2014
}, {
    name: "Ian's Pizza",
    pic: "/images/pizza.jpg",
    city: "Madison",
    state: "WI",
    cuisines: "Adventurous Pizza Place",
    founded: 2002
}])
.then(() => {
    console.log("Seed Planted")
    process.exit()
})
.catch(() => {
    console.log('Error Planting:', err)
    process.exit()
})