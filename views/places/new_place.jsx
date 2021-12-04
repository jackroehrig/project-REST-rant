// DEPENDENCIES
const React = require('react')

// LAYOUT
const Def = require('../default')

// VIEW
function newPlaceForm() {
    return (
        <Def>
            <div className="new-form container">
                <h2 className="display-3">Add City</h2>
                <form action="/places" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" type="text" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" id="pic" name="pic" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" type="text" required />
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
