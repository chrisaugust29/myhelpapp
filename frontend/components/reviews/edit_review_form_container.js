import { connect } from 'react-redux';
import { updateReview, fetchReview } from '../../actions/review_actions';
import { fetchBusiness } from '../../actions/business_actions';
import ReviewForm from './review_form';
import React from "react";

class EditReview extends React.Component {
  componentDidMount(){
    this.props.fetchReview();
    this.props.fetchDrink(); 
  }

  render(){
      console.log("this1",props)
    if (!this.props.review) return null
      return (
        <div>
          <ReviewForm {...this.props}/>
        </div>
        )
  }
}

const mapStateToProps = (state, ownProps) => ({
  formType: "Update Review",
  business: state.entities.businesses[ownProps.match.params.id],
  review: state.entities.reviews[ownProps.match.params.reviewId],
  currentUser: state.session.id,
  errors: state.errors.review,
  businessId: ownProps.match.params.businessId,
  reviewId: ownProps.match.params.reviewId
});

const mapDispatchToProps = dispatch => ({
  fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
  fetchReview: reviewId => dispatch(fetchReview(reviewId)),
  updateReview: review => dispatch(updateReview(review)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditReview);