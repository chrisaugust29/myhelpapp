import React from "react";
import { Link } from "react-router-dom";

class BusinessIndexItem extends React.Component {
    render() {
        let { id, name, category, street, city, zip_code, state,
             phone_number, business_info, rating, price } = this.props.business;
        return (
            <div>
                <Link to={`/businesses/${id}`}>
                    <li className="index-item-box"> 
                            {/* <div className="business-index-item-photo">
                                <img src={photoUrls[0]} />
                            </div> */}
                            <div className="info-box">
                                <div className="topinfo">
                                    <div className="info-top-left">
                                        <div className="item-name">
                                            {name}
                                        </div>
                                        {/* <div className='review-stars'>
                                            <img
                                                className={`star-mid-${ItemRating}` + ` star-mid`}
                                                src="https://i.imgur.com/UkZkm0D.png"
                                            ></img>
                                        </div> */}
                                        <div className="price">Price:{price}</div>
                                    </div>
                                    <div className="business-index-item-info">
                                        <ul>
                                            <li>
                                                {city}
                                            </li>
                                            <li>
                                                {category}
                                            </li>
                                            <li>
                                                <i className="phone"></i> {phone_number}
                                            </li>
                                            <li>
                                                <i className="street"></i> {street}
                                            </li>
                                            <li>
                                                <i className="city"></i> {city}
                                            </li>
                                            <li>
                                                <i className="zip"></i> {zip_code}
                                            </li>
                                            <li>
                                                <i className="state"></i> {state}
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* <div className='review-button-box'>
                                    <Link to={`/businesses/${id}/newRev`}>
                                        <button className="review-button"> Leave a Review</button>
                                    </Link>
                                </div> */}
                            </div>
                        </li>
                </Link>
            </div>

        );
    }
}
export default BusinessIndexItem;