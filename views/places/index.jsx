// DEPENDENCIES
const React = require('react')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT

// LAYOUT
const Def = require('../default')

// VIEW
function index (data) {
    let placesFormatted = data.places.map(place => {
        return (
            <div key={place.id}>
                <h2><a href={`http://localhost:${PORT}/places/${place.id}`}>{place.name}</a></h2>
                <img src={place.pictureLink} alt={place.name}/>
            </div>
        )
    })

    return (
        <Def>
            <main>
                <h1>Places</h1>
                {placesFormatted}
            </main>
        </Def>
    )
}

// EXPORT
module.exports = index