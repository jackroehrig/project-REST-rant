// DEPENDENCIES
const React = require('react')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT

// LAYOUT
const Def = require('../default')

// VIEW
function index(data) {
    let placesFormatted = data.places.map(place => {
        return (
            <div className="card" key={place.id}>
                <img className="card-img-top" src={place.pictureLink} alt={place.name} />
                <div className="card-body">
                    <h2 className="card-title"><a className="stretched-link" href={`http://localhost:${PORT}/places/${place.id}`}>{place.name}</a></h2>
                    <p className="card-text">{place.cuisineType}</p>
                </div>
                <div className="card-footer">
                    <p className="card-text">Located in {place.city}, {place.state}</p>
                </div>
            </div>
        )
    })

    return (
        <Def>
            <main className="container-fluid">
                <h1 className="display-3">Places to Rant or Rave About</h1>
                <a href=".">
                    <button className="btn btn-light btn-sm">Home</button>
                </a>
                <div className="card-deck">
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

// EXPORT
module.exports = index