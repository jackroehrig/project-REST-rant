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
            <div key={index} className="form-group">
                <label htmlFor={dataName}>
                    {
                        upperIndex != -1 
                        ? `${dataName[0].toUpperCase()}${dataName.slice(1, upperIndex)} ${dataName[upperIndex].toUpperCase()}${dataName.slice(upperIndex + 1)}` 
                        : `${dataName[0].toUpperCase()}${dataName.slice(1)}`
                    }
                </label>
                <input type='text' className='form-control' id={dataName} name={dataName}></input>
            </div>
        )
    })
    return (
        <Def>
            <div className="new-form container">
                <a href="." style={{position: 'fixed', left: '1vw', top: '1vw'}}>
                    <button className="btn btn-light btn-sm">Back To Places</button>
                </a>
                <h2 className="display-3">Add City</h2>
                <form action='/places' method='POST'>
                    {inputs}
                    <input className="btn btn-success" type='submit' value='Add'/>
                </form>
            </div>
        </Def>
    )
}

// EXPORT
module.exports = newPlaceForm
