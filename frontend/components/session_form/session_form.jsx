import React from 'react';
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this)
  }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
  }

    demoUser() {
        this.setState({ username: "Demothehelper", password: "password"})
        this.handleSubmit()
    }

    componentDidMount() {
        this.props.errorClear()
    }

    renderErrors() {
    
        return(
            <div className="creation-error">
        <ul>
            {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
                {error}
            </li>
            ))}
        </ul>
        </div>
        );
    }


    render() {
   
     if (this.props.formType == 'Login') {
         return (
             <div>
                 <div className="outer-container"> 
                    <div className ="link-div">
                        <Link to="/" className="logo-link2">
                            <img className="logo" src={window.logo} />
                        </Link>
                    </div>
                 </div>
                 
                <div className="login-form">
                    <h2 className ="logintop">Login to Help</h2><br />
                    <p className ="sublogintop">New to Help?<Link to="signup">Sign Up</Link></p><br/>
                    <p className="terms">By logging in, you agree to Help’s Terms of Service and Privacy Policy.</p>  <br />
                    <p className="or"><span className="or-span">OR</span></p>

                    <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <br />
                    <label>Username:
                    <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                        className="login-input"
                    />
                    </label>
                    <br/>
                    <label>Password:
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="login-input"
                    />
                    </label>     
                    <br/>
                    <input className="session-submit" type="submit" value={this.props.formType} />
                    <br/>
                    <button className="demo-user" onClick={() => this.demoUser()}>DEMO User Login</button>
                </form>
            </div>
        </div>
        )} else if (this.props.formType === 'Sign Up'){
            return (
                <div>
                    <div className="outer-container">
                        <div className="link-div">
                            <Link to="/" className="logo-link2">
                                <img className="logo" src={window.logo} />
                            </Link>
                        </div>
                    </div>
                    <div className="signup-form">
                        <form onSubmit={this.handleSubmit}>
                    Signup for Free! {this.props.navLink}
                            {this.renderErrors()}
                    <br />
                            <label>Username:
                    <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input"
                                />
                            </label>
                            <br />
                            <label>Password:
                    <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                />
                            </label>
                            <br />
                            <label>Email:
                    <input type="email"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-input"
                                />
                            </label>
                            <br />
                            <label>First Name:
                    <input type="text"
                                    value={this.state.first_name}
                                    onChange={this.update('first_name')}
                                    className="login-input"
                                />
                            </label>
                            <br />
                            <label>Last Name:
                    <input type="text"
                                    value={this.state.last_name}
                                    onChange={this.update('last_name')}
                                    className="login-input"
                                />
                            </label> <br />
                            <input className="session-submit" type="submit" value={this.props.formType} />
                        </form>
                    </div>
                </div>
            )
        }
    }
}

export default SessionForm;
