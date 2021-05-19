import React from "react";
import { Link } from "react-router-dom";
import Footer from '../footer/footer';
import Search from '../search/search';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        this.props.fetchBusinesses();
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    renderNavbar() {
        if (this.props.currentUser) {
            return (
                <div id="logout" className="right-top-nav">
                    <Link to="/businesses" className="helper-link">
                       Hello Helper, {this.props.currentUser.first_name}
                    </Link>
                    <button onClick={this.handleLogout} className="nav-logout-button">
                        Log Out
                    </button>
                </div>
            );
        } else {
            return (
                <div className="right-top-nav">
                    <Link
                        to="/login"
                        onClick={this.props.errorClear}
                        className="nav-login">
                        Log in
                    </Link>
                    <Link
                        to="/signup"
                        onClick={this.props.errorClear}
                        className="nav-signup">
                        Sign Up
                    </Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <div className="splash-main">
                        <div className="splash-nav1">
                            <div className="splash-bar-left">
                                <div className="splash-to-busi">
                                    <Link to="/businesses">Write a Review</Link>
                                </div>
                            </div>
                            <div className="splash-parent">{this.renderNavbar()}</div>
                        </div>

                    <div className="inner">
                        <Link to="/" className="logo-link">
                            <img className="logo1" src={window.logo} />
                        </Link>
                       
                    </div>
                    <div className="home-search-bar">
                     <div className="homesearch"><Search/></div>
                    </div>
                </div>
            <div className="splash-itembox-wrap">
                <div className="splash-box-name">Help's Best Businesses Near You</div>
                <div className="splash-item-box">
                    <Link to="/businesses" className="splashcategory">
                        <div className="all-categories-pic" />
                        <div className="all-category-words">Help's Businesses</div>
                    </Link>
                    <Link to="/businesses/American" className="splashcategory">
                        <div className="american-pic" />
                        <div className="american-words">American</div>
                    </Link>
                    <Link to="/businesses/Japanese" className="splashcategory">
                        <div className="japan-pic" />
                        <div className="japan-words">Japanese</div>
                    </Link>
                    <Link to="/businesses/Bar" className="splashcategory">
                        <div className="bar-pic" />
                        <div className="bar-words">Bars</div>
                    </Link>
                </div>
            </div> 
    </div>
        );
    }
}

export default Home;
