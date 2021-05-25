import React from 'react'
import HeaderContainer from '../header/header_container'
import { Link } from 'react-router-dom';
import ReviewIndexContainer from '../reviews/review_index_container'
import Map from '../map/map'


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
        console.log("thisman",this.props)
        let { business, reviews } = this.props
            if ((business === undefined) || (reviews === undefined)){
                return null
                }else{
                const {
                    name, category, street, city, state,
                    zip_code, webpage, phone_number, price, photoUrls, lat, lng
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
                                    Hours open and Location 
                                </div>
                                <div className="hours-box">  
                                    <ul className="business-show-hours">
                                        <li className="week-items">
                                            <div className ="day">Mon</div>
                                            <div className="time">8:30 AM - 5:30 PM</div>
                                        </li>
                                        <li className="week-items">
                                            <div className="day">Tues</div>
                                            <div className="time">8:30 AM - 5:30 PM</div>
                                        </li>
                                        <li className="week-items">
                                            <div className="day">Wed</div>
                                            <div className="time">8:30 AM - 5:30 PM</div>
                                        </li>
                                        <li className="week-items">
                                            <div className="day">Thurs</div>
                                            <div className="time">8:30 AM - 5:30 PM</div>
                                        </li>
                                        <li className="week-items">
                                            <div className="day">Fri</div>
                                            <div className="time">8:30 AM - 9:30 PM</div>
                                        </li>
                                        <li className="week-items">
                                            <div className="day">Sat</div>
                                            <div className="time">8:30 AM - 9:30 PM</div>
                                        </li>
                                        <li className="week-items">
                                            <div className="day">Sun</div>
                                            <div className="time">8:30 AM - 9:30 PM</div>
                                        </li>
                                    </ul>
                                    <div className="imap-box">        
                                            <Map className="showmap"
                                            businesses={[this.props.business]}
                                            lat={lat}
                                            lng={lng}
                                            />  
                                    </div>
                                </div>
                                
                            </div>
                        <div className = "rev-container">
                            <div className="bis-reviews">Helper's Reviews</div>      
                            <div className="rev-index-box">
                                <ReviewIndexContainer users={this.props.users} reviews={reviews} />
                            </div>
                        </div>    
                            
                </div>
            
            )};
    }
}
export default BusinessShow