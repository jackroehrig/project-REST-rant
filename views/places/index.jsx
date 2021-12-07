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
                <img className="card-img-top" src={place.pic} alt={place.name} />
                <div className="card-body">
                    <h2 className="card-title"><a className="stretched-link" href={`/places/${place.id}`}>{place.name}</a></h2>
                    <p className="card-text">{place.cuisines}</p>
                    <p className="card-text">Founded in {place.founded}</p>
                </div>
                <div className="card-footer">
                    <p className="card-text">Located in {place.city}, {place.state}</p>
                </div>
            </div>
        )
    })

    return (
        <Def>
            <div className="container-fluid">
                <h1 className="display-3" style={{margin: '2vw auto'}}>Places to Rant or Rave About</h1>
                <div className="card-deck">
                    {placesFormatted}
                </div>
            </div>
        </Def>
    )
}

// EXPORT
module.exports = index