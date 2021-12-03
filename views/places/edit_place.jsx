// DEPENDENCIES
const React = require('react')

// LAYOUT
const Def = require('../default')

// VIEW
function edit(data){
    let id = data.placeId
    let editeePlace;
    data.places.forEach(place => place.id == id ? editeePlace = place : null)
    return (
        <Def>
            <h1 className="display-3">EDIT: {editeePlace.name}</h1>
            <div className="new-form container">
                <form action={`/places/${id}`} method="PUT">
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
                    <input className="btn btn-danger" type="submit" value="CONFIRM EDIT" />
                </form>
                <a href="." style={{ position: 'absolute', left: '13vw', margin: '2vw'}}>
                    <button className="btn btn-light btn-sm">Cancel</button>
                </a>
            </div>
        </Def>
    )
}

// EXPORT
module.exports = edit