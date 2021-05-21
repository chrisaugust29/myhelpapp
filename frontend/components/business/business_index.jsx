import React from 'react'
import { Link } from 'react-router-dom';
import BusinessIndexItem from "./business_index_item";
import HeaderContainer from '../header/header_container'
import Map from '../map/map'
import Footer from '../footer/footer'

class BusinessIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // debugger
        this.props.fetchBusinesses();
    }
    render() {
        // if (!this.props.businesses.length)
        //     return null;
        // else {
            let { businesses, fetchBusinesses } = this.props
            return (
                <div>
                    <HeaderContainer />
                    <div className="busi-index-box">
                        <div className="busi-index-box2">
                            <div className="items-box">
                                {businesses.map((business, index) => 
                                <BusinessIndexItem
                                    business={business}
                                    // key={business.id}
                                    key={index}
                                />)
                                }
                            </div>
                             <div className="map-box">
                                <Map className="map" businesses={businesses} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        //  }
    }
}

export default BusinessIndex