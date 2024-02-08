import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import img1 from '../images/logo.png'

function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.modeColor} bg-${props.modeColor}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">WebTech</Link>
                    {/* <img src={img1} alt="" /> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search Anything" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                    <div className={`form-check form-switch text-${props.toggleTextColor}`}>
                        <input className="form-check-input" onClick={props.settoggleFun} type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ cursor: "pointer" }} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.toggleText}</label>
                    </div>
                </div>
            </nav >
        </>
    );
}
export default Navbar;

//through this we can specify the type of our props elements.. e.g: string, number, objects, arrays
Navbar.propTypes = {
    companyName: PropTypes.string.isRequired,   //is required means company name must have some value otherwse it will through an error
    aboutPage: PropTypes.string,
}

// Default props: we set default props whenever we not set the props values
Navbar.defaultProps = {
    companyName: "New Company Name",
    aboutPage: "About-Page",
}