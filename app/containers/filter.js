/*jshint esversion: 6 */
/* jshint -W138 */

import React from 'react';
import { connect } from 'react-redux';

import * as FILTERS from '../constants/filters';
import * as FilterActions from '../actions/filter-actions';
import FilterEl from '../containers/filter-element';

const mapStateToProps = (
  state
) => {
  return {
    visibilityFilter: state.visibilityFilter
  };
};

const mapDispatchLinkToProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick: (filter) => {
      return () => {
        dispatch(FilterActions.set(filter))
      }
    }
  };
};

const Filter = ({
  visibilityFilter,
  onClick
}) => {
  let filters = [
    FILTERS.ID,
    FILTERS.PRICE,
    FILTERS.SIZE
  ];

  return <div>
    <p>Filter by:</p>
    <ul>
      {
        filters.map((filter, index) => {
          return <FilterEl key={index} onClick={onClick(filter)} active={filter === visibilityFilter}>{filter}</FilterEl>;
        })
      }
    </ul>
  </div>;
};

export default connect(mapStateToProps, mapDispatchLinkToProps)(Filter);
