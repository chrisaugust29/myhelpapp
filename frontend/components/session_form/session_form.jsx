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

  renderErrors() {
  
    return(
        <div classname="creation-error">
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
            <div className="login-form">
                <header>Login/Join HelpApp</header>
                <form onSubmit={this.handleSubmit}>
                <br/>
                Signup for Free! {this.props.navLink}
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
            </form>
        </div>
        )} else if (this.props.formType === 'Sign Up'){
            return (
                <div className="login-form">
                    <header>Login/Join HelpApp</header>
                    <form onSubmit={this.handleSubmit}>
                        <br />
                Signup for Free! {this.props.navLink}
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
                        </label>
                        <br />

                        <input className="session-submit" type="submit" value={this.props.formType} />
                        
                    </form>
                </div>
            )
        }
    }
}

export default SessionForm;
