import React from 'react'

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props)

    }

    handleDelete() {
        this.props.deleteReview(this.props.review.id)
            .then(() => window.location.reload())
    }

    // componentDidMount() {
    //     this.props.fetchUsers()
    // }

    // deleteButton() {
    //     if (this.props.currentUser === this.props.author.id)
    //         return (
    //             <div className='rev-btn-place'>
    //                 <button className='revitem-btn'
    //                     onClick={this.handleDelete()}
    //                 >
    //                     Delete</button>
    //             </div>
    //         )
    // }
    // editDelete() {
    //     if (this.props.currentUser !== null && this.props.currentUser !== undefined) {
    //         if (this.props.review.user_id === this.props.currentUser.id) {
    //             return (
    //                 <div className="edit-del">
    //                     <div className="revbuttonbox">
    //                         <div className="review-drop-btn-box">
    //                             <button onClick={() => this.handleClick(this.props.review.id)} className="rev-drop">
    //                             </button>
    //                         </div>
    //                         <div id={`myReviewDropdown${this.props.review.id}`} className='rev-drop-info'>
    //                             <p className="edit-rev" onClick={this.handleUpdate}><Link className="edit-review-text" to={`/businesses/${this.props.business.id}/reviews/${this.props.review.id}/update`}>Edit your review</Link></p>
    //                             <p className="del-rev" onClick={() => this.handleReview(this.props.review.id)}>Delete review</p>
    //                         </div>
    //                     </div>
    //                     <div id={`delete${this.props.review.id}`} className="del-back" onClick={this.removeReview}>
    //                             <div className="delete-text">
    //                                 <div className="del-confirm">
    //                                     <p>Cofirm to remove your review</p>
    //                                     <div className="buttons-box">
    //                                         <button className="del-no" onClick={() => window.location.reload()}>Keep Review</button>
    //                                         <button className="del-yes" onClick={this.handleDelete}>Remove Review</button>
    //                                     </div>
    //                                 </div>

    //                             </div>
    //                         </div>
    //                     </div>
    //             )
    //             } else {
    //             return (
    //                 <></>
    //             )
    //         }
    //     }
    // }
    render() {
        let dates = this.props.review.created_at
        let { first_name, last_name } = this.props.review
        return (
            <div>
                <div className='rev-box'>
                    <div className='rev-author'>
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
                                    <div className='time-stamp'>{dates} </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='rev-body'>
                        <p>{this.props.review.body}</p>
                    </div>
                    <div className='review-btn-box'>
                        {/* {this.deleteButton()} */}
                    </div>
                </div>
            </div>
        )
    }

}

export default ReviewIndexItem