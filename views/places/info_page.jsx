// DEPENDENCIES
const React = require('react')

// CONFIGURE
require('dotenv').config()
const PORT = process.env.PORT

// LAYOUT
const Def = require('../default')

// VIEW
function placeInfo(data){
    let placeObj = data.place
    return (
        <Def>
            <div className="place-profile">
                <div className="place-image">
                    <img src={placeObj.pic} alt={`picture of ${placeObj.name}`}/>
                </div>
                <div className="place-info text-center">
                    <h2 className="display-2 border-bottom mb-4">{placeObj.name}</h2>
                    <h3>Rating</h3>
                    <p>unknown</p>
                    <h3 className="mt-3">Description</h3>
                    <p>{placeObj.showEstablished()}</p>
                    <p>{`Serving: ${placeObj.cuisines}`}</p>
                    <a href={`/places/${placeObj.id}/edit`}>
                        <button className="btn btn-warning"><i className="far fa-edit" /> Edit</button>
                    </a>
                    <form action={`/places/${placeObj.id}?_method=DELETE`} method="POST" style={{display: 'inline'}}>
                        <button type='submit' className="btn btn-danger"><i className="far fa-trash-alt" /> Delete</button>
                    </form>
                    <a href="/places">
                        <button className="btn btn-light">Back</button>
                    </a>
                </div>
            </div>
            <div className="comments text-center">
                <h3>Comments</h3>
            </div>
        </Def>
    )
}

// EXPORT
module.exports = placeInfo