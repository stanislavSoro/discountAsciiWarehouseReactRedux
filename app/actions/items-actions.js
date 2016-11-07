/*jshint esversion: 6 */
/* jshint -W138 */

import * as types from '../constants/action-types';
import * as Items from '../utils/items';

export const get = (skip, sortBy) => {
  return Items
    .get(skip, sortBy)
    .then((items)=> {
      return {
        type: types.ADD_ITEMS,
        discountItems: items
      };
    });
};

export const clean = () => {
  return {
    type: types.SET_NEW_ITEMS,
    discountItems: []
  };
};

export const setLoadingState = (state) => {
  return {
    type: types.SET_LOADING_STATE,
    loading: state
  };
};
