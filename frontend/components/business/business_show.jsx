import React from 'react'
import HeaderContainer from '../header/header_container'
import { Link } from 'react-router-dom';
import ReviewIndexContainer from '../reviews/review_index_container'
import Map from '../map/map'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCheck, faTimes, faExternalLinkAlt, faPhoneAlt, faMapSigns, faStar } from '@fortawesome/free-solid-svg-icons';

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
                                     <div className = "website">
                                        <FontAwesomeIcon
                                        icon={faExternalLinkAlt}
                                        size="lg"
                                        />
                                        <a className="web-url" href={webpage} target="_blank">{webpage}</a>
                                        
                                    </div>
                                    <div id="info">  <i className="fas fa-phone-square-alt"></i> {phone_number}</div>
                                    <div id="info"><i className="fas fa-map-marker-alt"></i> {street}</div>
                                    <div id="info"> {city}, <i className="state"></i> {state} <i className="zip"></i> {zip_code}</div>
                                   
                                    <div/>
                                </div>
                                <div className="covid">  COVID-19 Updates</div>
                                <div className="covid-msg">"Updated March 31, 2021. Indoor Dining Is BACK!! For Pick-Up/Delivery Order Online at theboulevardcafe.com Thanksgiving meals served every Thursday! Corned Beef & Cabbage every Wednesday! Cocktails, Beer & Wine, and Mimosa Kits available for take-out!</div>
                                <div className="service">  Updated Services</div>
                                <div className="info-item-icon-box1">
                                    <div className="iout">
                                        <FontAwesomeIcon 
                                        icon={faCheck}
                                        fixedWidth
                                        color="green"
                                        />
                                        <span>Outdoor-Seating</span>
                                    </div>
                                    <div className="itake">
                                        <FontAwesomeIcon
                                        icon={faCheck}
                                        fixedWidth
                                        color="green"
                                        />
                                        <span>Takeout</span>
                                    </div>
                                    <div className="idel">
                                        <FontAwesomeIcon
                                        icon={faTimes}
                                        fixedWidth
                                        color="red"
                                        />
                                        <span>Delivery</span>
                                    </div>
                                    <div className="itake">
                                        <FontAwesomeIcon
                                        icon={faCheck}
                                        fixedWidth
                                        color="green"
                                        />
                                        <span>Curbside pickup</span>
                                    </div> 
                                      <div className="idel">
                                        <FontAwesomeIcon
                                        icon={faTimes}
                                        fixedWidth
                                        color="red"
                                        />
                                        <span>Private Dining</span>
                                    </div> 
                                       {/* <div className="idel">
                                        <FontAwesomeIcon
                                        icon={faTimes}
                                        fixedWidth
                                        color="red"
                                        />
                                        <span>DIY meal kits</span>
                                    </div>           */}
                                </div>
                                <div className="health">  Health and Safety Mesures</div>
                                 <div className="info-item-icon-box">
                                    <div className="iout">
                                        <FontAwesomeIcon 
                                        icon={faCheck}
                                        fixedWidth
                                        color="green"
                                        />
                                        <span>Temperature Checks</span>
                                    </div>
                                    <div className="itake">
                                        <FontAwesomeIcon
                                        icon={faCheck}
                                        fixedWidth
                                        color="green"
                                        />
                                        <span>Hand sanitizer provided</span>
                                    </div>
                                    <div className="idel">
                                        <FontAwesomeIcon
                                        icon={faTimes}
                                        fixedWidth
                                        color="red"
                                        />
                                        <span> More than 6 per party</span>
                                    </div>
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
                                 <div className = "rev-container">
                            <div className="bis-reviews">Helper's Reviews</div>      
                            <div className="rev-index-box">
                                <ReviewIndexContainer users={this.props.users} reviews={reviews} />
                            </div>
                        </div>   
                            </div>
                        
                            
                </div>
            
            )};
    }
}
export default BusinessShow