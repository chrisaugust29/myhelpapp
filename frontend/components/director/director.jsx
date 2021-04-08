import React from 'react';
import { Link } from 'react-router-dom';


const Director = ({currentUser, logout}) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login" className="director-login">Log In</Link>
            <Link to="/signup" className="director-signup">Sign Up</Link>
        </nav>
    );

const  handlelogout = () => (

        <nav className="handlelogout-bar">
            <div className ="currentuserbar">{ currentUser.username }</div>
            <button className='logout-button' onClick={logout}>Log Out</button>
        </nav>
    );
 return currentUser ? handlelogout() : sessionLinks();
};

export default Director 