import React, { useState, useEffect } from 'react';
// import ProductDetail from '../ProductDetail';

import { useGlobalContext } from '../../../contexts/GlobalStore';

function SelectSize() {
//   // need to pass in a value for productID somehow (either global state or client url)
  const {
    productID, setProductID, productInfo, setProductInfo,
    selectedStyle, setSelectedStyle, styles, setStyles,
  } = useGlobalContext();

  const [skus, setSkus] = useState([]);

  useEffect(() => {
    setSkus(() => selectedStyle.skus);
  }, [selectedStyle]);

//   function getAvailableSizes() {
//     // could just map all the skus objects and return an option element if quantity > 0
//     const { skus } = productStyles.results;
//     console.log({ skus });
//     const sizes = [];
//     for (const key in skus) {
//       const { quantity, size } = skus[key];
//       const availability = {};
//       availability[size] = quantity;
//       availability[sku] = skus[key];
//       sizes.push(availability);
//     }

//     sizes.sort((a, b) => (Number(a.sku) - Number(b.sku)));

//     let noSizesAvailable = true;

//     for (let i = 0; i < sizes.length; i++) {
//       if (sizes[i].quantity > 0) {
//         noSizesAvailable = false;
//       }
//     }
//     if (noSizesAvailable) {
//       // disableSelectSize();
//     }
//     return sizes;
//   }

//   // .then((stylesResult) => getAvailableSizes(stylesResult.results))
//   //       .catch((err) => { console.log('error getting available sizes', err) })

//   const availableSizes = getAvailableSizes(productStyles);
//   console.log(getAvailableSizes(productStyles));

  return (
    <select>
      Size
      <option>{skus['1394895'].size}</option>
      {/* {availableSizes.map((size) => <option>{size}</option>)} */}
    </select>
  );
}

export default SelectSize;

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
