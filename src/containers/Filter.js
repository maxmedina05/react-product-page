import { connect } from 'react-redux';
import Filter from '../components/filter/Filter';
import { setVisibilityFilter } from '../actions/filter.action';

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setVisibilityFilter(filter))
});

export default connect(
  null,
  mapDispatchToProps
)(Filter);
