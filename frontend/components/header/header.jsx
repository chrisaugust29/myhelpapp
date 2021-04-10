import React from "react";
import { Link, withRouter } from "react-router-dom";
// import Search from '../search/search'

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
             <div className="pbusi-nav-bar-">
                <div className="pbusi-nav-top">
                    <div className="busi-nav-top">
                        <div className="business-logo">
                            <p> <Link to="/">Help</Link></p>
                        </div>
                        <div className="business-nav-search">
                        </div>
                        {this.renderHeadBar()}
                    </div>
                </div>

                <div className="busi-categories">
                    <div className="busi-category-box">
                        <div className="cate-item">
                            <Link to="/"> <i className="fab fa-yelp"></i> Help! </Link>
                        </div>
                        <div className="nav-bar-category-item">
                            <Link to="/businesses">
                                <i className="home"></i>  Help's Business{" "}
                                <i className="down-arrow"></i>
                            </Link>
                        </div>

                        <div className="nav-bar-category-item">
                            <Link to="/businesses/bbq">
                                <i className="bar"></i> Bar{" "}
                                <i className="down-arrow"></i>
                            </Link>
                        </div>
                        <div className="nav-bar-category-item">
                            <Link to="/businesses/sushi">
                                <i className="fast-food"></i> Fast Food{" "}
                                <i className="down-arrow"></i>
                            </Link>
                        </div>
                        <div className="nav-bar-category-item">
                            <Link to="/businesses/bar">
                                <i className="japanese"></i> Japanese{" "}
                                <i className="down-arrow"></i>
                            </Link>
                        </div>
                        <div className="nav-bar-category-item">
                            <Link to="/businesses/chinesefood">
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
                        HELP
                 </Link>
                    <button onClick={this.handleLogout} className="head-to-home">
                        Sign Out
                    </button>
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