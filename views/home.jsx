// DEPENDENCIES
const React = require('react')

// LAYOUT
const Def = require('./default')

// VIEW
function home () {
    return (
        <Def>
            <main className="text-center">
                <h1 className='display-1'>REST-RANT</h1>
                <div>
                    {/* <img src="/images/cool-pic.jpg" alt="cool picture of nature" /> */}
                    {/* <div>
                        Photo by <a href='https://unsplash.com/@evannn_n'>Sanjeevan SatheesKumar</a> on <a href="https://unsplash.com/">Unsplash</a>
                    </div> */}
                </div>
                <p className="lead">Welcome to Rest-Rant! A place to save and comment on your favorite restaurants.</p>
                <a href="/places">
                    <button className="btn btn-light">Places Page</button>
                </a>
            </main>
        </Def>
    )
}


// EXPORT
module.exports = home