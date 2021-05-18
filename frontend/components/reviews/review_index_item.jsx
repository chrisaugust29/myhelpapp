import React from 'react'

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props)

    }

    handleDelete() {
        return(e)=> { 
        e.preventDefault();
        this.props.deleteReview(this.props.review.id)
            .then(window.location.reload())
        }
    }

    // componentDidMount() {
    //     this.props.fetchUsers()
    // }

    deleteButton() {
        if (this.props.currentUser === this.props.author.id)
            return (
                <div className='rev-btn-place'>
                    <i className='fas fa-trash'
                        onClick={this.handleDelete()}>
                        
                    </i>
                </div>
            )
    }

    // editButton(){
    //     return(
    //         <Link to={`/review/drink/${this.props.drinkId}/edit/${this.props.review._id}`}>
    //             Edit
    //         </Link>
    //     )
    // }

    updateButton() {
        if (this.props.currentUser === this.props.author.id)
            return (
                <div className='rev-btn-place'>
                    <i className='fas fa-trash'
                        onClick={this.handleDelete()}>
                        
                    </i>
                </div>
            )
    }

    render() {
       
        let dates = this.props.review.created_at
        let { first_name, last_name } = this.props.review

        return (
            <div>
                <div className='rev-box'>
                    <div className='rev-author'>
                        <div className='photo-box'>
                            <img className='face-photo'
                                src={window.face} />
                        
                        <div className='author-name'>
                            {first_name}&nbsp;{last_name}
                            <div className='review-item-rating'>
                                <div className="review-stars">
                                    <p className="rating">
                                        <i className='fas fa-star'></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        
                                    </p>
                                 </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='rev-body'>
                        <p>{this.props.review.body}</p>
                    </div>
                    <div className="del-btn">{this.deleteButton()}</div>
                    {/* <div className="edit-btn">{this.editButton()}</div> */}
                    <div className='time-stamp'>{dates} </div>
                    
                </div>
            </div>
        )
    }

}

export default ReviewIndexItem