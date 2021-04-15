import React from 'react'
import HeaderContainer from '../header/header_container'
import { Link } from 'react-router-dom';
import ReviewIndexContainer from '../reviews/review_index_container'


class BusinessShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.id);
        this.props.fetchReviews(); 
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchBusiness(this.props.match.params.id)
        }
    }
    render() {

        let { business, reviews } = this.props
            if ((business === undefined) || (reviews === undefined)){
                return null
                }else{
                const {
                    name, category, street, city, state,
                    zip_code, webpage, phone_number, price, photoUrls
                } = business;
                
                return (
                    
                    <div>
                        <HeaderContainer />
                        <div className="show-box">
                            {photoUrls.map((photo, idx) => (
                                <div key={idx} className="imgs-items">
                                    <img src={photo} className="show-img" />
                                </div>
                            ))}
                        </div>    
                        <div className="show-box2">
                            <div className="show-top">
                                <div className="show-top-info">
                                    <p>{name}</p>
                                    <p className="rating">
                                        <i className='fas fa-star'></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </p>
                                    <p className="biz-info-category">
                                        <span>{price} • {category}</span>
            
                                    </p>
                                    <span className="top-writeareview">
                                        <Link to={`/businesses/${business.id}/newreview`}>
                                        <i className="fas fa-star" /> Write a Review
                                        </Link>
                                    </span>
                                </div>
                            </div>
                            <div className="contact-info">
                                <div id="info"><i  />{phone_number}</div>
                                <div id="info"><i  />{webpage}</div>
                                <div id="info"><i /> Full Menu</div>
                                <div id="info"><i /> Contact the Business</div>
                            </div>
                            <div className="mid-header">
                                Hours Open
                            </div>  
                                <div className="business-show-hours">
                                    <div><p id="week">Mon</p><p>8:30am - 5:30pm</p></div>
                                    <div><p id="week">Tue</p><p>8:30am - 5:30pm</p></div>
                                    <div><p id="week">Wed</p><p>8:30am - 5:30pm</p></div>
                                    <div><p id="week">Thu</p><p>8:30am - 5:30pm</p></div>
                                    <div><p id="week">Fri</p><p>8:30am - 5:30pm</p></div>
                                    <div><p id="week">Sat</p><p>10:30am - 7:30pm</p></div>
                                    <div><p id="week">Sun</p><p>10:30am - 7:30pm</p></div>
                                </div>
                          
                        </div>
                      
                        <div className="rev-index-box">
                            
                            <ReviewIndexContainer users={this.props.users} reviews={reviews} />
                        </div>
                    
                </div>
            
            )};
    }
}
export default BusinessShow