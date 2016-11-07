/*jshint esversion: 6 */
/* jshint -W138 */

import * as types from '../constants/action-types';

const loading = (state = false, action) => {
  switch (action.type) {
    case types.SET_LOADING_STATE:
      return action.loading;
    default:
      return state;
  }
};

export default loading;
