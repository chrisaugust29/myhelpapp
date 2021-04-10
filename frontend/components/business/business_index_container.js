import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { fetchBusinesses, fetchBusiness } from '../../actions/business_actions'
import React from 'react';

const mapStatetoProps = state => ({
    businesses: Object.values(state.entities.businesses)
});

const mapDispatchToProps = dispatch => ({
        fetchBusinesses: () => dispatch(fetchBusinesses()),
        fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId))
});

export default connect(mapStatetoProps, mapDispatchToProps)(BusinessIndex);