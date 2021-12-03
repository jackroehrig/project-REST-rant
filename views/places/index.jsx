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
            <div className="col-sm-6" key={place.id}>
                <h2><a href={`http://localhost:${PORT}/places/${place.id}`}>{place.name}</a></h2>
                <p>{place.cuisineType}</p>
                <img src={place.pictureLink} alt={place.name}/>
                <p>Located in {place.city}, {place.state}</p>
            </div>
        )
    })

    return (
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <a href=".">
                    <button>Home</button>
                </a>
                <div className="row">
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

// EXPORT
module.exports = index