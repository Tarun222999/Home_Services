import React from 'react'
import '../styles/NewHome.css'
import { NavLink } from 'react-router-dom'
const NewHome = () => {
    return (
        <div>
            <section id="title">
                <div className="container-fluid">
                    {/* Navigation section */}
                    <nav className="navbar navbar-expand-lg navbar-dark ">
                        <NavLink className="navbar-brand" to="/">Home</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <ul className="navbar-nav ms-auto">
                                <li className="navitem">
                                    <NavLink className="nav-link" to="/contact">Contact us</NavLink>
                                </li>
                                <li className="navitem">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="navitem">
                                    <NavLink className="nav-link" to="/login">Register/login</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    {/* Title section */}
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>Home service <br /> on demand</h1>
                            <button type="button" className="btn btn-light btn-md download-button"><i className="fa-brands fa-apple"></i>Download</button>
                            <button type="button" className="btn btn-light btn-md download-button"><i className="fa-brands fa-google-play"></i>Download</button>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <img className="title-img" src="/images/cleaners.webp" alt="title-img" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NewHome
