import React, { useEffect, useState } from 'react';

import axios from 'axios';

import ProductDetail from './ProductDetail/ProductDetail';
import RelatedItems from './RelatedItems/RelatedItems';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers';
import { GlobalContextProvider } from '../contexts/GlobalStore';

function App(props) {
  // would put this in general context
  const [productData, setProductData] = useState({});

  useEffect(() => {
    const productId = window.location.pathname;
    console.log(productId);
    props.setProductID(productId);

    axios
      .get('/products', { params: { ID: `${productId}` } })
      .then((results) => { setProductData(results.data); })
      // .then using request url (maybe?) to setProductID
      // .then((result) => {setData(result.data)}
      // alert client when error
      .catch((err) => { console.log(err); });
  }, []);

  //   // axios requests for each module


  return (
    <div>
      <h1>Hello World</h1>
      <div>
        <GlobalContextProvider>
          <ProductDetail />
          <RelatedItems />
          <RatingsAndReviews />
          <QuestionsAndAnswers />
        </GlobalContextProvider>
      </div>
    </div>
  );
}

export default App;
