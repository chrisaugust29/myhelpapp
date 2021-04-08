import React from "react";
import { Link, Route, Redirect, Switch, } from 'react-router-dom';
import Navbar from "./director/navbar";

const Splash = () => {
    return (
        <div className ="outerlogo1">
            <Link to="/" className="logo-link">
                <img className="logo1" src={window.logo} />
            </Link>
            <Navbar />
        </div>
    )
}

export default Splash