// DEPENDENCIES
const React = require('react')

// LAYOUT
const Def = require('../default')

// VIEW
function index (data) {
    let placesFormatted = data.places.map((place, index) => {
        return (
            <div key={index}>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}/>
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