/*jshint esversion: 6 */
/* jshint -W138 */

import * as types from '../constants/action-types';
import * as FILTERS from '../constants/filters';

const visibilityFilter = (state = FILTERS.ID, action) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
