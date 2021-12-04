// DEPENDENCIES
const React = require('react')

// VIEW
function Def(html) {
    return (
        <html>
            <head>
                <title>REST-RANT</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/styles.css" />
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />
            </head>
            <body>
                <main>
                    {html.children}
                </main>
                <footer className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <h5>Created By: Jack Roehrig</h5>
                    </div>
                    <div>
                        <a href="" className="ms-2 me-2 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="ms-2 me-2 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="ms-2 me-2 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="ms-2 me-2 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="ms-2 me-2 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </footer>
            </body>
        </html>
    )
}

// EXPORT
module.exports = Def