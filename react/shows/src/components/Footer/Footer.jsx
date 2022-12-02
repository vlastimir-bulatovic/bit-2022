import React from 'react'
import "./footer.scss"


function Footer() {
    return (
        <>
            <footer className="py-3">
                <div className="container">
                        <nav className="row">
                            <div className="col-12">
                                <h3 >Copyrigth &copy; BitStudent {new Date().getFullYear()}</h3>
                            </div>
                        </nav>
                    </div>
            </footer>
        </>
    )
}

export default Footer
