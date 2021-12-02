// DEPENDENCIES
const React = require('react')

// LAYOUT
const Def = require('./default')

// VIEW
function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
        </Def>
    )
}

// EXPORT
module.exports = error404