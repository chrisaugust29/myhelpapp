import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
    ERROR_CLEAR
} from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        case ERROR_CLEAR:
            return [];
        default:
            return state;
    }
};

export default sessionErrorsReducer
