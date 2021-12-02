// DEPENDENCIES
const React = require('react')

// LAYOUT
const Def = require('../default')

// VIEW
function newPlaceForm() {
    let data = ['name', 'picture-link', 'city', 'state', 'cuisine-type']
    let inputs = data.map((dataName, index) => {
        let hyphenIndex = dataName.search(/\-/)
        return (
            <label style={{display: 'block', margin: '2vw auto'}} key={index} htmlFor={dataName}>
                {
                    hyphenIndex != -1 
                    ? `${dataName[0].toUpperCase()}${dataName.slice(1, hyphenIndex)} ${dataName[hyphenIndex + 1].toUpperCase()}${dataName.slice(hyphenIndex + 2)}` 
                    : `${dataName[0].toUpperCase()}${dataName.slice(1)}`
                }
                <input type='text' id={dataName} name={dataName}></input>
            </label>
        )
    })
    return (
        <Def>
            <form action='/places' method='POST'>
                {inputs}
                <input type='submit' value='Add'/>
            </form>
        </Def>
    )
}

// EXPORT
module.exports = newPlaceForm
