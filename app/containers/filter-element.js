/*jshint esversion: 6 */
/* jshint -W138 */

import React from 'react';

const FilterEl = ({
  active,
  onClick,
  children
}) => {
  if (active) {
    return <span style={{marginRight: 10}}>{children}</span>
  }

  return <a onClick={(e)=> {
      e.preventDefault();
      onClick();
    }} style={{marginRight: 10}} href="#">{children}</a>
};

export default FilterEl;
