// DEPENDENCIES
const React = require('react')

// VIEW
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/styles.css" />
            </head>
            <body className="text-center">
                {html.children}
            </body>
        </html>
    )
}

// EXPORT
module.exports = Def