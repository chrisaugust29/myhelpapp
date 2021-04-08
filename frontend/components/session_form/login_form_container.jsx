import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, errorClear } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Login',
        Link: <Link to="/signup">Sign Up</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        errorClear: () => dispatch(errorClear())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
