/*jshint esversion: 6 */
/* jshint -W138 */

import React from 'react';

import Filter from '../containers/filter';

const Header = () => {
  return <header>
    <div>
      <h1>Discount Ascii Warehouse</h1>
      <p>Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.</p>
      <Filter />
    </div>
  </header>;
};


export default Header;
