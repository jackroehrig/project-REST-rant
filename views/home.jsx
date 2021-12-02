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
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}


// EXPORT
module.exports = home