import React from 'react'
import { Link } from 'react-router-dom';
import BusinessIndexItem from "./business_index_item";
import HeaderContainer from '../header/header_container'

class BusinessIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBusinesses();
    }
    render() {
        let { businesses, fetchBusinesses } = this.props
        return (
            <div>
                <HeaderContainer />
                <div className="busi-index-box">
                    <div className="busi-index-box2">
                        <div className="items-box">
                            {businesses.map((business) => 
                            <BusinessIndexItem
                                business={business}
                                fetchBusinesses={fetchBusinesses}
                                key={business.id}
                            />)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BusinessIndex