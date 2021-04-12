import React from 'react'
import HeaderContainer from '../header/header_container'
import { Link } from 'react-router-dom';

class BusinessShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.id);
        this.props.fetchUsers();
    }

    render() {
        let { business } = this.props
        const {
            name, category, street, city, state,
            zip_code, webpage, phone_number, price
        } = business;
        
        return (
            <div>
                <HeaderContainer />
                <div className="show-box">
                    <div className="show-box2">
                        <div className="show-bname">
                            <div>{name}</div>
                        </div>
                        {/* add stars image */}
                        <div className="stars">
                        </div>
                        <div className="details-list">
                            <ul>
                                <li>{price}</li>
                                <li>{category}</li>
                                <li className="time"><span className="show-open-tag">Opens;</span>9:00AM - 9:00PM</li>
                                <li>{street},{city},{state}{zip_code}</li>
                                <li>{phone_number}</li>
                                <li>{webpage}</li>
                            </ul>
                        </div>
                    </div>
                 </div>
            </div>
           
        );
    }
}
export default BusinessShow