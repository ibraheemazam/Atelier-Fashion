// import React, { useState } from 'React';
// import ProductDetail from '../../ProductDetail/ProductDetail.jsx';

// function getAvailableQuantity(styles) {
//   // could just map all the skus objects and return an option element if quantity > 0
//   const skus = styles.data.skus;
//   const sizes = [];
//   for (key in skus) {
//     const {quantity: quantity , size: size}= skus[key];
//     var availability = {};
//     availability[size] = quantity;
//     availability[sku] = skus[key];
//     sizes.push(availability);
//    }

//   sizes.sort((a, b) => {return (Number(a.sku) - Number(b.sku))});

//   var noSizesAvailable = true;

//   for (var i = 0; i < sizes.length; i++) {
//     if (sizes[i].quantity > 0) {
//       noSizesAvailable = false;
//       return (
//         <option>{size}</option>
//       );
//     }
//   }
//   if (noSizesAvailable) {
//     disableSelectSize();
//   }
// };

// function selectQuantity() {
//   // need to pass in a value for productID somehow (either global state or client url)

//   getAvailableSizes();

//   return (
//     <select>
//       Quantity
//       <option>
//         {getAvailableQuantity(size) }
//         </option>
//     </select>
//   );
// };

// export default selectQuantity;