import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from "../../actions/review_actions";
import { fetchBusiness } from "../../actions/business_actions"

const mapStateToProps = (state, ownProps) => ({   
        currentUser: state.session.id,
        
    })

const mapDispatchToProps = dispatch => ({
    action: review => dispatch(createReview(review)),
    createReview: review => dispatch(createReview(review)),
    // fetchBusiness: id => dispatch(fetchBusiness) 

});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
