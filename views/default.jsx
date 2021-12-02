// DEPENDENCIES
const React = require('react')

// VIEW
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

// EXPORT
module.exports = Def