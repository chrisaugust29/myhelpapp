import React from "react";
import { Link, Route, Redirect, Switch,} from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from "./session_form/login_form_container";
import DirectorContainter from "./director/director_container";
import HomeContainer from './home/home_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from "./splash";
import BusinessShowContainer from './business/business_show_container'
import BusinessIndexContainer from './business/business_index_container'
import AmericanIndex from './business/categories/american_index'
import JapaneseIndex from './business/categories/japanese_index'
import HealthyIndex from './business/categories/healthy_index'
import BarsIndex from './business/categories/bars_index'

const App = () => (
    <div>
     < Switch>
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/businesses" component={BusinessIndexContainer} />
        <Route exact path="/businesses/:id" component={BusinessShowContainer} />
        <Route exact path="/businesses/american" component={AmericanIndex} />
        <Route exact path="/businesses/japanese" component={JapaneseIndex} />
        <Route exact path="/businesses/healthy" component={HealthyIndex} />
        <Route exact path="/businesses/bars" component={BarsIndex} />
        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
    </Switch>
    </div>
);

export default App;