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
import ReviewFormContainer from "./reviews/review_form_container";
import EditReviewFormContainer from "./reviews/edit_review_form_container";
import Footer from './footer/footer'
import SearchContainer from "./search/search_container";

const App = () => (
    <div>
     < Switch>
     {/* <Route path='/search/' component={SearchContainer} /> */}
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/businesses" component={BusinessIndexContainer} />
        
        <Route exact path="/businesses/American" component={AmericanIndex} />
        <Route exact path="/businesses/Japanese" component={JapaneseIndex} />
        <Route exact path="/businesses/Healthy" component={HealthyIndex} />
        <Route exact path="/businesses/Bar" component={BarsIndex} />
        <Route exact path="/businesses/:id" component={BusinessShowContainer} />
        <Route exact path='/businesses/:id/newreview' component={ReviewFormContainer} />
        <Route exact path="/businesses/:id/newreview/:reviewId" component={EditReviewFormContainer}/>
        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
    </Switch>
    <Footer />
    </div>
    
);

export default App;