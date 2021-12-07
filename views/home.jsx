// DEPENDENCIES
const React = require('react')

// LAYOUT
const Def = require('./default')

// VIEW
function home () {
    return (
        <Def>
            <div className="text-center">
                <p className="lead home-message">Welcome to Rest-Rant! A place to save and comment on your favorite restaurants.</p>
            </div>
        </Def>
    )
}


// EXPORT
module.exports = home