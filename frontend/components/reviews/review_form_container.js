import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from "../../actions/review_actions";
import { fetchBusiness } from '../../actions/business_actions'

const mapStateToProps = (state) => ({   
        currentUser: state.session.id,
        formType: 'Create Review'
    })

const mapDispatchToProps = dispatch => ({
    action: review => dispatch(createReview(review)),
    fetchBusiness: (id) => dispatch(fetchBusiness(id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
