import React from 'react'
import HeaderContainer from '../header/header_container'
import { Link, Redirect, withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            business_id: this.props.match.params.id,
            author_id: this.props.currentUser,
            rating: 4,
            body: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitR = this.submitR.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchBusiness(this.props.match.params.id)
    // };

    loginMust() {
        alert('Log In User before submitting Review')
    }

    submitR() {
        this.props.history.push(`/businesses/${this.props.match.params.id}`);
    }

    update(f) {
        return e => this.setState({
            [f]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
       

        this.props.createReview(this.state)
        this.submitR()
       
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className="review-errors" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
    
        return (
            <div>
                <HeaderContainer />
                <div className='form-box'>
                    <div className='ftitle'>Write a Helper Review!</div>
                    <div className='finfo-box'>
                        <form className='rform' onSubmit={this.handleSubmit}>
                            <div className='form-wrapper'>
                                <div className='form-rating-box'>
                                    <div className='rating-text'>Please select below a rating from 1 through 5! </div>
                                    <input type="number" value={this.state.rating} className="far fa-star" min="1" max="5" onChange={this.update("rating")} />                              
                                </div>
                                <div className='rbody'>
                                    <textarea className='rtext' rows='15' cols='40'
                                        value={this.state.body}
                                        onChange={this.update('body')}
                                        placeholder='Please leave a review of your experience!'
                                    />
                                </div>
                            </div>
                            <div className='submit-button-box'>
                                <div className='rform-button'>
                                    <button className = 'submit-review'>Submit Review</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
        
    }
}

export default withRouter(ReviewForm)




