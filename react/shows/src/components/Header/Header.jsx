import React from 'react'
import "./header.scss";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="py-3">
                <div className="container">
                    <nav className="row">
                        <div className="col-6">
                            <Link to="/" >
                                <h3 >BIT Shows</h3>
                            </Link>
                        </div>
                        
                        <div className="col-6 text-end">
                            <Link to="/about" >
                                <h3 >About Us</h3>
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
