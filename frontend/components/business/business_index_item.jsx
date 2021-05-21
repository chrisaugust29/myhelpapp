import React from "react";
import { Link } from "react-router-dom";

class BusinessIndexItem extends React.Component {
    render() {
        let { id, name, category, street, city, zip_code, state,
             phone_number, rating, price, photoUrls, lat, lng } = this.props.business;
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
                                        <div>{category}</div>
                                        <div className="price">{price}</div>
                                            
                                            
                                        
                                    </div>
                                    <div className="info-item-box">
                                        <ul>
                                            
                                            <li>
                                                <i className="phone"></i> {phone_number}
                                            </li>
                                            <li>
                                                <i className="street"></i> {street}
                                            </li>
                                            <li>
                                                {city}
                                            </li>
                                            <li>
                                                <i className="state"></i> {state}, <i className="zip"></i> {zip_code}
                                            </li>
                
                                        </ul>
                                    </div>
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