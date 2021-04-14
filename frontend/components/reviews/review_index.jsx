import React from "react";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { author, currentUser } = this.props;
        const reviews = this.props.reviews.reverse().map((r, i) => {
            let author = Object.assign({}, this.props.users[r.author_id])    
            return (
                <ReviewIndexItem
                    key={i}
                    review={r}
                    author={author}
                    deleteReview={this.props.deleteReview}
                    currentUser={currentUser}
                />
            );
        });

        return <div>{reviews}</div>;
    }
}

export default ReviewIndex;