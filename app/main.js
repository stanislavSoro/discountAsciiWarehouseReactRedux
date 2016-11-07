/*jshint esversion: 6 */
/* jshint -W138 */

import React from 'react';
import * as Redux from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from '../app/containers/app';
import discountItems from  '../app/reducers/discount-items';
import visibilityFilter from  '../app/reducers/visibility-filter';
import loading from  '../app/reducers/loading';

const AppReducer = Redux.combineReducers({
  discountItems,
  visibilityFilter,
  loading
});

ReactDOM.render(
  <Provider store={Redux.createStore(AppReducer)}>
    <App />
  </Provider>,
  document.getElementById('app')
);
