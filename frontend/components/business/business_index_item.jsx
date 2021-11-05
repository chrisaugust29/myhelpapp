import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

class BusinessIndexItem extends React.Component {
    render() {
        let { id, name, category, street, city, zip_code, state,
             phone_number, rating, price, photoUrls, lat, lng, info } = this.props.business;
        return (
            <div>
                <Link to={`/businesses/${id}`}>
                    <li className="index-item-box"> 
                        <div className="index-big-box">
                            <div className="index-photo">
                                <img className = "photo" src={photoUrls} />
                            </div>
                            {/* <div className="index-photo">
                                <img src={photo_url[0]} />
                            </div> */}
                            <div className="info-box">
                                <div className="info-top-box">
                                    <div className="info-top-left">
                                        <div className="item-name">
                                            {name}
                                        </div>
                                        <div>{rating}</div>
                                        <p className="rating">
                                            <i className='fas fa-star'></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </p>
                                        <div className="price">{price} - {category} </div>
                                        
                                    </div>
                                    <div className="info-item-box">
                                        <ul>
                                            {/* <li>
                                                <i className="category"></i> {category}
                                            </li>
                                             */}
                                            <li>
                                                <i className="fas fa-phone-square-alt"></i> {phone_number}
                                            </li>
                                            <li>
                                                <i className="fas fa-map-marker-alt"></i> {street}
                                            </li>
                                            <li>
                                                {city}, <i className="state"></i> {state} <i className="zip"></i> {zip_code}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="info-item-icon-box">
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
                                </div>
                                 <div className="binfo-box">
                                    "{info}"
                                </div>
                            </div>
                            
                        </div>
                    </li>
                </Link>
            </div>

        );
    }
}
export default BusinessIndexItem;