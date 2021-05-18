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
        // e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
  }

    demoUser() {
       let user1 = this.setState({ username: "Demothehelper", password: "password"})
        this.handleSubmit(user1)
    }

    componentDidMount() {
        this.props.errorClear()
    }

    renderErrors() {
        return(
                <ul>
                    {this.props.errors.map((error, i) => (
                    <li className="popout-error" key={`error-${i}`}>
                        <button className="errorbutton" onClick={this.props.errorClear}>X</button>
                        {error}
                    </li>
                    ))}
                </ul>
        )};

    render() {
   
     if (this.props.formType == 'Login') {
         return (
            <> 
                <header className="outer-header">
                    <Link to="/" className="logo-link2">
                        <img className="logo" src={window.logo}/>
                    </Link>
                </header>
                    <div className ="login-form-box">  
                        <div className ="wrap2"> 
                            {this.renderErrors()}
                            <div className = "wrap1">
                                <div className="login-form">
                                    <div className ="login-form-top">
                                        <h2 className ="logintop">Login to Help</h2>
                                        <p className ="sublogintop">New to Help? <Link className="signup1"to="/signup"> Sign Up</Link></p> <br/>
                                        <p className="terms">By logging in, you agree to Help’s Terms of Service and Privacy Policy.</p>
                                        <p className="or"><span className="or-span">OR</span></p>
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="user-pass-login">
                                                <label>
                                                    <input type="text"
                                                        placeholder="Username"
                                                        value={this.state.username}
                                                        onChange={this.update('username')}
                                                        className="login-input"
                                                        required="required"
                                                    />
                                                </label>
                                                <label>
                                                    <input type="password"
                                                        placeholder="Password"
                                                        value={this.state.password}
                                                        onChange={this.update('password')}
                                                        className="login-input"
                                                        required="required"
                                                    />
                                                </label>
                                            </div>
                                            <br />
                                            <input className="session-submit" type="submit" value={this.props.formType}
                                            />
                                            <button className="demo-user" onClick={() => this.demoUser()}>Demo User Login</button> <br />
                                            <p className="under-submit">New to Help? <Link className="under-submit-link" to="/signup"> Sign Up</Link></p>
                                            <br />
                                        </form>
                                    </div>
                                    <div className="login-img">
                                     <img className="login-img" src={window.loginimg} />
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
        </>
        )} else if (this.props.formType === 'Sign Up'){
            return (
                <>
                    <header className="outer-header">
                        <Link to="/" className="logo-link2">
                            <img className="logo" src={window.logo} />
                        </Link>
                    </header>
                    <div className="login-form-box"> 
                        <div className="wrap2">
                            {this.renderErrors()}
                            <div className="wrap1">
                                <div className="login-form">
                                    <div className="login-form-top">
                                        <h2 className="signuptop">Sign Up for Help</h2>
                                        <p className="connect">Connect with great local businesses.</p>
                                        <p className="continue">By continuing, you agree to Help's Terms of Service and acknowledge Help's Policy.</p>
                                        <p className="or2"><span className="or-span">OR</span></p>
                                        <form onSubmit={this.handleSubmit}>
                                                <label>
                                                    <input type="text"
                                                    placeholder ="Username"
                                                    value={this.state.username}
                                                    onChange={this.update('username')}
                                                    className="suserinput"
                                                    required="required"
                                                    />
                                                </label>
                                                <br />
                                                <label>
                                                    <input type="password"
                                                    placeholder="Password"
                                                    value={this.state.password}
                                                    onChange={this.update('password')}
                                                    className="spassinput"
                                                    required="required"
                                                    />
                                                </label>
                                                <br />
                                                <label>
                                                <input type="email"
                                                    placeholder="Email"
                                                    value={this.state.email}
                                                    onChange={this.update('email')}
                                                    className="semailinput"
                                                    required="required"
                                                    />
                                                </label>
                                                <br />
                                                <label>
                                                    <input type="text"
                                                    placeholder="First Name"
                                                    value={this.state.first_name}
                                                    onChange={this.update('first_name')}
                                                    className="fname-input"
                                                    required="required"
                                                    />
                                                </label>
                                                <br />
                                                <label> 
                                                 <input type="text"
                                                    placeholder="Last Name"
                                                    value={this.state.last_name}
                                                    onChange={this.update('last_name')}
                                                    className="lname-input"
                                                    required="required"
                                                    />
                                                </label> 
                                                <input className="session-submit" type="submit" value={this.props.formType} />
                                         </form>
                                        <p className="under-submit1">Already a Helper? <Link className="under-submit-link1" to="/login"> Log In</Link></p>
                                    </div>
                                    <div className="login-img">
                                        <img className="login-img" src={window.loginimg} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                )
            }
        }
    }

export default SessionForm;
