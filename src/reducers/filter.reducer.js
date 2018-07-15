import { SET_VISIBILITY_FILTER } from '../actions/filter.action';

const visibilityFilterReducer = (
  state = {
    query: '',
    groupBy: '',
    orderBy: '',
    oneStar: true,
    twoStar: true,
    threeStar: true,
    fourStar: true,
    fiveStar: true
  },
  action
) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilterReducer;
