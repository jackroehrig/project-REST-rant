// DEPENDENCIES
const React = require('react')

// LAYOUT
const Def = require('../default')

// VIEW
function newPlaceForm() {
    // let data = ['name', 'pictureLink', 'city', 'state', 'cuisineType']
    // let inputs = data.map((dataName, index) => {
    //     let upperIndex = dataName.search(/[A-Z]/)
    //     return (
    //         <div key={index} className="form-group">
    //             <label htmlFor={dataName}>
    //                 {
    //                     upperIndex != -1 
    //                     ? `${dataName[0].toUpperCase()}${dataName.slice(1, upperIndex)} ${dataName[upperIndex].toUpperCase()}${dataName.slice(upperIndex + 1)}` 
    //                     : `${dataName[0].toUpperCase()}${dataName.slice(1)}`
    //                 }
    //             </label>
    //             <input type='text' className='form-control' id={dataName} name={dataName}></input>
    //         </div>
    //     )
    // })
    return (
        <Def>
            <div className="new-form container">
                <h2 className="display-3">Add City</h2>
                <form action="/places" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" id="pic" name="pic" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" required />
                    </div>
                    <input className="btn btn-success" type="submit" value="Add" />
                </form>
                <a href="." style={{ position: 'absolute', left: '13vw', margin: '2vw'}}>
                    <button className="btn btn-light btn-sm">Back To Places</button>
                </a>
            </div>
        </Def>
    )
}

// EXPORT
module.exports = newPlaceForm
