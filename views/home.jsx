// DEPENDENCIES
const React = require('react')

// LAYOUT
const Def = require('./default')

// VIEW
function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/cool-pic.jpg" alt="cool picture of nature" />
                    <div>
                        Photo by <a href='https://unsplash.com/@evannn_n'>Sanjeevan SatheesKumar</a> on <a href="https://unsplash.com/">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}


// EXPORT
module.exports = home