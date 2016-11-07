/*jshint esversion: 6 */
/* jshint -W138 */

import React from 'react';

const ListEl = ({
  text,
  price
}) => {
  return (
    <div>
      <div className="item">{text}</div>
      <div className="item-price">${price}</div>
    </div>
  )
};

export default ListEl;
