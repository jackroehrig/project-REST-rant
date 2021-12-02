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
            <h2>{placeObj.name}</h2>
            <img src={placeObj.pictureLink} alt={`picture of ${placeObj.name}`}/>
            <p>{`Located in ${placeObj.city}, ${placeObj.state}`}</p>
            <p>{`Type of Cuisine: ${placeObj.cuisineType}`}</p>
            <form action={`/places/${placeObj.id}/edit`} method='GET'>
                <input type='submit' value='Edit'/>
            </form>
        </Def>
    )
}

// EXPORT
module.exports = placeInfo