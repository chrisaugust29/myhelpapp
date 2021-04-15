import { connect } from "react-redux";
import { fetchUsers } from '../../actions/user_actions'
import { fetchBusiness } from "../../actions/business_actions";
import BusinessShow from './business_show';
import { fetchReviews } from "../../actions/review_actions";


const mapStateToProps = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.match.params.id],
    users: state.entities.users,
    reviews: Object.values(state.entities.reviews)
    .filter((review) => review.business_id == ownProps.match.params.id
    )
})

const mapDispatchToProps = dispatch => {
    return ({
        fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
        fetchUsers: () => dispatch(fetchUsers()),
        fetchReviews: ()=> dispatch(fetchReviews())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);