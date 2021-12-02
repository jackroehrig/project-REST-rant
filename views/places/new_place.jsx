// DEPENDENCIES
const React = require('react')

// LAYOUT
const Def = require('../default')

// VIEW
function newPlaceForm() {
    let data = ['name', 'pictureLink', 'city', 'state', 'cuisineType']
    let inputs = data.map((dataName, index) => {
        let upperIndex = dataName.search(/[A-Z]/)
        return (
            <label style={{display: 'block', margin: '2vw auto'}} key={index} htmlFor={dataName}>
                {
                    upperIndex != -1 
                    ? `${dataName[0].toUpperCase()}${dataName.slice(1, upperIndex)} ${dataName[upperIndex].toUpperCase()}${dataName.slice(upperIndex + 1)}: ` 
                    : `${dataName[0].toUpperCase()}${dataName.slice(1)}: `
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
