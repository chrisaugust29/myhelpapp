import React from 'react';
import { Link } from 'react-router-dom';


const Director = ({currentUser, logout}) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login"><button>Log In</button></Link>
            <Link to="/signup"><button>Sign Up</button></Link>
        </nav>
    );

const  handlelogout = () => (

        <nav className="handlelogout-bar">
            { currentUser.username }
            <button className='logout-button' onClick={logout}>Log Out</button>
        </nav>
    );
 return currentUser ? handlelogout() : sessionLinks();
};

export default Director 