import React from "react";
import { Link, withRouter } from "react-router-dom";
import Search from '../search/search_container'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e){
        e.preventDefault();
        this.props.logout();
    }

    render() {
        return (
             <div className="pbusi-nav-bar">
                <div className="pbusi-nav-top">
                    <div className="busi-nav-top">
                        <div className="business-logo">
                            <Link to="/" className="logo-link">
                                <img className="logo1" src={window.logo} />
                            </Link>
                        </div>
                        <div className="business-nav-search">
                            <Search/>
                        </div>
                        {this.renderHeadBar()}
                    </div>
                </div>

                <div className="busi-categories">
                    <div className="busi-category-box">
                        <div className="nav-bar-category-item">
                            <Link to="/"> <i className="fab fa-yelp"></i> Help! </Link>
                        </div>
                        <div className="nav-bar-category-item">
                            <Link to="/businesses">
                                <i className="home"></i>  Help's Business{" "}
                                <i className="down-arrow"></i>
                            </Link>
                        </div>

                        <div className="nav-bar-category-item">
                            <Link to="/businesses/Bar">
                                <i className="bar"></i> Bars{" "}
                                <i className="down-arrow"></i>
                            </Link>
                        </div>
                        <div className="nav-bar-category-item">
                            <Link to="/businesses/American">
                                <i className="fast-food"></i> Fast Food{" "}
                                <i className="down-arrow"></i>
                            </Link>
                        </div>
                        <div className="nav-bar-category-item">
                            <Link to="/businesses/Japanese">
                                <i className="japanese"></i> Japanese{" "}
                                <i className="down-arrow"></i>
                            </Link>
                        </div>
                        <div className="nav-bar-category-item">
                            <Link to="/businesses/Healthy">
                                <i className="healthy"></i> Healthy{" "}
                                <i className="down-arrow"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

   renderHeadBar(){
        if (this.props.currentUser) {
            return (
                <div id="logout" className="head-bar-right">
                    <Link to="/" className="head-to-home">
                       Hello Helper!
                 </Link>
                    <Link to="/signup" onClick={this.props.errorClear, this.props.logout} className="head-to-home">
                        Sign Out
                    </Link>
                </div>
            )
        } else {
            return (
                <div className="head-bar-right">
                    <Link to="/login" onClick={this.props.errorClear} className="home-signup">
                        Log in
                    </Link>
                    <Link to="/signup" onClick={this.props.errorClear} className="home-signup">
                        Sign Up
                    </Link>
                </div>
            );
        }
    }
}
export default withRouter(Header);