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
            <body className="d-flex flex-column">
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand ms-3" href="/">REST-RANT</a>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/places">Places</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/places/new">Add A Place</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    {html.children}
                </main>
                <footer className="flex-shrink d-flex justify-content-center justify-content-lg-between p-3 border-bottom bg-light text-body">
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
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
            </body>
        </html>
    )
}

// EXPORT
module.exports = Def