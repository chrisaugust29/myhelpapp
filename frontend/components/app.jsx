import React from "react";
import { Link, Route, Redirect, Switch,} from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from "./session_form/login_form_container";
import DirectorContainter from "./director/director_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from "./splash";
import BusinessIndexContainer from './business/business_index_container'

const App = () => (
    <div>
     < Switch>
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <Route exact path="/" component={Splash} />
        <Route exact path="/businesses" component={BusinessIndexContainer} />
        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
    </Switch>
    </div>
);

export default App;