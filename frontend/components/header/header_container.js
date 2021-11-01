import { connect } from 'react-redux'
import { logout, errorClear } from '../../actions/session_actions';
import Header from './header';


const mapStateToProps = (state) => {
    return {
        currentUser: state.session.id,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(login(user)),
        logout: () => dispatch(logout()),
        errorClear: () => dispatch(errorClear())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);