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
        <h3 className="inactive mt-4">
            No comments yet!
        </h3>
    )

    let rating = (
        <p className="inactive fs-3">
            Not yet rated
        </p>
    )

    if(data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => tot + c.stars, 0)
        let averageRating = sumRatings / data.place.comments.length
        averageRating = Math.round(averageRating * 2)/2

        let pageStars = []

        for(let i = averageRating; i > 0; i--){
            i == 0.5
            ? pageStars.push(<i className="fas fa-star-half fa-lg" key={i}/>)
            : pageStars.push(<i className="fas fa-star fa-lg" key={i}/>)
        }

        rating = <div className="stars w-25 mt-3 mx-auto">{pageStars}</div>

        comments = data.place.comments.map((c, index) => {

            let stars = []

            for(let i = c.stars; i > 0; i--){
                i == 0.5
                ? stars.push(<i className="fas fa-star-half fa-lg" key={i}/>)
                : stars.push(<i className="fas fa-star fa-lg" key={i}/>)
            }

            return (
                <div className="comment border border-4 rounded-2 mb-4" key={index}>
                    <div className="rant fs-6">{c.rant ? <i className="far fa-frown fa-3x text-danger" /> : <i className="far fa-grin-beam fa-3x text-success" />}</div>
                    <div className="w-75 m-auto">
                        <div className="mt-2">
                            <div className="stars w-50 mx-auto">{stars}</div>
                            <p className="lead fs-3 mt-4">{c.content}</p>
                            <div className="">
                                <h5 className="display-6 fs-2">
                                    <strong>- {c.author}</strong>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    let rantOrRaveTip = 'Please check this if you are ranting about this restaurant. If you enjoyed the experience leave it unchecked.'

    

    return (
        <Def>
            <div className="place-profile container-fluid my-5">
                <div className="row">
                    <div className="place-image col-lg text-center">
                        <img className="img-fluid" src={placeObj.pic} alt={`picture of ${placeObj.name}`}/>
                    </div>
                    <div className="place-info text-center col-lg">
                        <h1 className="display-1 border-bottom mb-4">{placeObj.name}</h1>
                        <h2 className="fs-1">Rating</h2>
                        {rating}
                        <h2 className="mt-3 fs-1">Description</h2>
                        <p className="fs-3">{placeObj.showEstablished()}</p>
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
            <div className="container-fluid text-center comment-area">
                <div className="row my-5">
                    <div className="col-lg">
                        <h2 className="fs-1">Make A Comment</h2>
                        <div className="border border-4 text-start">
                            <form className="w-50 my-3 mx-auto" action={`/places/${placeObj.id}/comment`} method="POST">
                                <label htmlFor="author">Name</label>
                                <input className='form-control' id="author" name="author" />
                                <div className="form-check mt-3">
                                    <label className="form-check-label" htmlFor="rant">Ranting or Raving? <a data-bs-toggle='tooltip' data-bs-placement="top" title={rantOrRaveTip}><i className="fas fa-info-circle text-light"/></a></label>
                                    <input className='form-check-input' id="rant" name="rant" type="checkbox"/>
                                </div>
                                <label className="mt-3" htmlFor="stars">Stars Out of 5</label>
                                <input className='form-range' id="stars" name="stars" type="range" min='0' max='5' step="0.5" />
                                <label className="mt-3" htmlFor="content">Comment</label>
                                <textarea className='form-control' id="content" name="content" rows="3"/>
                                <div className="text-center">
                                    <button className="btn btn-dark" type="submit" ><i className="far fa-share-square text-success"></i> Comment</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg">
                        <h2 className="fs-1">Comments</h2>
                        {comments}
                    </div>
                </div>
            </div>
        </Def>
    )
}

// EXPORT
module.exports = placeInfo