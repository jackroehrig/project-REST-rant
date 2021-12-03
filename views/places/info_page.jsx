// DEPENDENCIES
const React = require('react')

// CONFIGURE
require('dotenv').config()
const PORT = process.env.PORT

// LAYOUT
const Def = require('../default')

// VIEW
function placeInfo(data){
    let placeId = data.placeId
    let placeObj
    data.places.forEach(place => place.id == placeId ? placeObj = place : null)

    return (
        <Def>
            <div className="place-info">
                <h2 className="display-3">{placeObj.name}</h2>
                <p>{`Type of Cuisine: ${placeObj.cuisineType}`}</p>
                <img src={placeObj.pictureLink} alt={`picture of ${placeObj.name}`}/>
                <p>{`Located in ${placeObj.city}, ${placeObj.state}`}</p>
                <a href={`/places/${placeObj.id}/edit`}>
                    <button className="btn btn-danger">Edit</button>
                </a>
                <a href="/places">
                    <button className="btn btn-light">Back</button>
                </a>
            </div>
        </Def>
    )
}

// EXPORT
module.exports = placeInfo