import { connect } from "react-redux";
import { fetchUsers } from '../../actions/user_actions'
import { fetchBusiness } from "../../actions/business_actions";
import BusinessShow from './business_show';


const mapStateToProps = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.match.params.id],
    users: state.entities.users
})

const mapDispatchToProps = dispatch => {
    return ({
        fetchBusiness: (id) => dispatch(fetchBusiness(id)),
        fetchUsers: () => dispatch(fetchUsers())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);