import React from 'react';
import { deleteReview } from '../../actions/review_actions';
import { fetchUsers } from '../../actions/user_actions';
import ReviewIndex from './review_list_item';
import { connect } from 'react-redux';
import { editReview } from '../../actions/review_actions'
import { fetchReviews } from '../../util/review_api_util';

const mapStateToProps= (state) => {
    return ({
        currentUser: state.session.id,
        ownProps
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
        fetchReviews: () => dispatch(fetchReviews()),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);