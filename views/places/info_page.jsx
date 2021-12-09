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

    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )

    if(data.place.comments.length) {
        comments = data.place.comments.map((c, index) => {

            let stars = []

            for(let i = c.stars; i > 0; i--){
                i == 0.5
                ? stars.push(<i className="fas fa-star-half fa-lg" key={i}/>)
                : stars.push(<i className="fas fa-star fa-lg" key={i}/>)
            }

            return (
                <div className="comment border border-4 w-50 m-auto rounded" key={index}>
                    <div className="rant">{c.rant ? <i className="far fa-frown fa-3x text-danger" /> : <i className="far fa-grin-beam fa-3x text-success" />}</div>
                    <div className="w-50 m-auto">
                        <h4 className="stars my-4">{stars}</h4>
                        <h4 className="lead my-4">{c.content}</h4>
                        <h5 className="display-6">
                            <strong>- {c.author}</strong>
                        </h5>
                    </div>
                </div>
            )
        })
    }

    return (
        <Def>
            <div className="place-profile container-fluid my-5">
                <div className="row">
                    <div className="place-image col-lg text-center">
                        <img className="img-fluid" src={placeObj.pic} alt={`picture of ${placeObj.name}`}/>
                    </div>
                    <div className="place-info text-center col-lg">
                        <h1 className="display-1 border-bottom mb-4">{placeObj.name}</h1>
                        <h2>Rating</h2>
                        <p>unknown</p>
                        <h2 className="mt-3">Description</h2>
                        <p>{placeObj.showEstablished()}</p>
                        <p>{`Serving: ${placeObj.cuisines}`}</p>
                        <a href={`/places/${placeObj.id}/edit`}>
                            <button className="btn btn-dark"><i className="far fa-edit text-warning"/> Edit</button>
                        </a>
                        <form action={`/places/${placeObj.id}?_method=DELETE`} method="POST" style={{display: 'inline'}}>
                            <button type='submit' className="btn btn-dark"><i className="far fa-trash-alt text-danger"/> Delete</button>
                        </form>
                        <a href="/places">
                            <button className="btn btn-dark"><i className="fas fa-arrow-circle-left text-primary"/> Back</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="comments text-center container my-5">
                <h2>Comments</h2>
                {comments}
            </div>
        </Def>
    )
}

// EXPORT
module.exports = placeInfo