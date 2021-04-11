import { connect } from "react-redux";
import BusinessIndex from "../business_index";
import { fetchBusinesses } from "../../../actions/business_actions";
import { fetchUsers } from '../../../actions/user_actions'
import { Japanese } from "../../../reducers/categories_reducer";


const mapStateToProps = (state) => {
    return {
        businesses: Japanese(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBusinesses: () => dispatch(fetchBusinesses()),
        fetchUsers: () => dispatch(fetchUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);
