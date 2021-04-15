import React from "react";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchReviews()
    }
    render() {
        
        let reviews=this.props.reviews
        if(this.props.reviews.length === 0) return null;
        return (
            <div>
                {reviews.map((rev, idx) => {
                    let author = Object.assign({}, this.props.users[rev.author_id])
                        return (
                            <ReviewIndexItem key={idx} review={rev} author={author} deleteReview={this.props.deleteReview} currentUser={this.props.currentUser}/>
                        )
                    }
                )}
            </div>
        )
    }
}


export default ReviewIndex;