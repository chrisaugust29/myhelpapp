import React from "react";
import { Link, Route, Redirect, Switch,} from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from "./session_form/login_form_container";
import DirectorContainter from "./director/director_container";

const App = () => (
    <div>
        <Link to="/" className="logo-link">
            <h1>Help App</h1>
        </Link>
     < Switch>
        <Route path="/signup" component={SignupFormContainer} />
        <Route path="/login" component={LoginFormContainer} />
        <Route exact path="/" component={DirectorContainter} />
        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
    </Switch>
    </div>
);

export default App;