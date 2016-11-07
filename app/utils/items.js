/*jshint esversion: 6 */
/* jshint -W138 */

import { ITEMS_LIMIT_PER_GET } from '../constants/config';
import * as oboe from 'oboe';

export function get(skip, sortBy) {
  let url = '/api/products?limit=' + ITEMS_LIMIT_PER_GET + '&skip=' + skip + '&sort=' + sortBy;
  var itemsReceived = 0;
  let products = [];
  let promise = new Promise((resolve, reject)=>{
    let oboeStream = oboe.default({
        url: url
      })
      .done((data) => {
        products.push(data);
        ++itemsReceived;
        if (itemsReceived === ITEMS_LIMIT_PER_GET) {
          oboeStream.abort();
          return resolve(products);
        }
      });
  });

  return promise;
}
