import React from 'react';
import { Link } from 'react-router-dom';

const footer = () => (
    <div className="footer">
        <div className="footer-container">
            <a className="github" target="_blank" href="https://github.com/chrisaugust29">
                <i className="fab fa-github" />
            </a>
            <a
                className="linkedin"
                target="_blank" href="https://www.linkedin.com/in/christopher-low-99a557a3/"
            >
                <i className="fab fa-linkedin" />
            </a>
            <img className="footer-img" src={window.footer}/>
        </div>
    </div>
);

export default footer;