import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchBusinesses } from '../../actions/business_actions';
import Search from './search';

const mapStateToProps = state => {
  return {
    businesses: Object.values(state.entities.businesses),
    currentUser: state.session.id,
    names: Object.values(state.entities.businesses).map(business => ([business.name, business.id]))
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
});

export default withRouter (connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));