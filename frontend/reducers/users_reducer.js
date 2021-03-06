import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USERS } from '../actions/user_actions';
// import { RECEIVE_BUSINESS } from '../actions/business_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
        default:
            return state;
    }
}

export default usersReducer;