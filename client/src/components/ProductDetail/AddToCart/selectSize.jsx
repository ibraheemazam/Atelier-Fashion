import React, { useState } from 'React';
import ProductDetail from '../../ProductDetail/ProductDetail.jsx';

function getAvailableSizes(styles) {
  // could just map all the skus objects and return an option element if quantity > 0
  const skus = styles.data.skus;
  const sizes = [];
  for (key in skus) {
    const {quantity: quantity , size: size}= skus[key];
    var availability = {};
    availability[size] = quantity;
    availability[sku] = skus[key];
    sizes.push(availability);
   }

  sizes.sort((a, b) => {return (Number(a.sku) - Number(b.sku))});

  var noSizesAvailable = true;

  for (var i = 0; i < sizes.length; i++) {
    if (sizes[i].quantity > 0) {
      noSizesAvailable = false;
      return (
        <option>{size}</option>
      );
    }
  }
  if (noSizesAvailable) {
    disableSelectSize();
  }
};

function selectSize() {
  // need to pass in a value for productID somehow (either global state or client url)

  getAvailableSizes();

  return (
    <select>
      Select size
      getAvailableSizes(); // need to pass in styles object for product_id
    </select>
  );
}

export default { getAvailableSizes, selectSize };

// {
//   "product_id": "1",
//   "results": [
//   {
//           "style_id": 1,
//           "name": "Forest Green & Black",
//           "original_price": "140",
//           "sale_price": "0",
//           "default?": true,
//           "photos": [
//       {
//                   "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
//                   "url": "urlplaceholder/style_1_photo_number.jpg"
//               },
//       {
//                   "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
//                   "url": "urlplaceholder/style_1_photo_number.jpg"
//               }
//       // ...
//           ],
//       "skus": {
//                 "37": {
//                       "quantity": 8,
//                       "size": "XS"
//                 },
//                 "38": {
//                       "quantity": 16,
//                       "size": "S"
//                 },
//                 "39": {
//                       "quantity": 17,
//                       "size": "M"
//                 },
//           //...
//             }
//   },
// {
//       "style_id": 2,
//       "name": "Desert Brown & Tan",
//       "original_price": "140",
//       "sale_price": "0",
//       "default?": false,
//       "photos": [
//       {
//                   "thumbnail_url": "urlplaceholder/style_2_photo_number_thumbnail.jpg",
//                   "url": "urlplaceholder/style_2_photo_number.jpg"
//       }
//     // ...
//           ],
//       "skus": {
//                 "37": {
//                       "quantity": 8,
//                       "size": "XS"
//                 },
//                 "38": {
//                       "quantity": 16,
//                       "size": "S"
//                 },
//                 "39": {
//                       "quantity": 17,
//                       "size": "M"
//                 },
//           //...
//             }
//   },
// // ...
// }