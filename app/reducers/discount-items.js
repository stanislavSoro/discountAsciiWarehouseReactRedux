/*jshint esversion: 6 */
/* jshint -W138 */

import * as types from '../constants/action-types';

const discountItems = (state = [], action) => {
  switch (action.type) {
    case types.ADD_ITEMS: {
      return state.concat(action.discountItems);
    }
    case types.SET_NEW_ITEMS: {
      return action.discountItems;
    }
    default:
      return state;
  }
};

export default discountItems;
