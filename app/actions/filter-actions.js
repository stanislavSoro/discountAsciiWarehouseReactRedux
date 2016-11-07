/*jshint esversion: 6 */
/* jshint -W138 */

import * as types from '../constants/action-types';

export const set = (filter) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  };
};
