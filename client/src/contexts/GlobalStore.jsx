import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const GlobalContext = React.createContext();

export function useGlobalContext() {
  return React.useContext(GlobalContext);
}

export function GlobalContextProvider({ children }) {
  GlobalContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  // will use API later to get information
  const [productID, setProductID] = useState(40348);
  const [productInfo, setProductInfo] = useState({});

  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [numQuestions, setNumQuestions] = useState();

  const [reviews, setReviews] = useState([]);

  const [outfits, setOutfits] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);
  const [outfitIndex, setOutfitIndex] = useState(0);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    function getProductInfo() {
      axios.get('/products', {
        params: {
          ID: productID,
        },
      }).then((results) => {
        setProductInfo(results.data);
      });
    }
    function getQuestions() {
      axios
        .get('/questions', {
          params: { product_id: productID, count: 100 },
        })
        .then((results) => {
          setQuestions(results.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getQuestions();
    getProductInfo();

    setNumQuestions(4);
  }, [productID]);

  const value = {
    productID,
    setProductID,
    productInfo,
    setProductInfo,
    questions,
    setQuestions,
    filteredQuestions,
    setFilteredQuestions,
    numQuestions,
    setNumQuestions,
    reviews,
    setReviews,
    outfits,
    setOutfits,
    cardIndex,
    setCardIndex,
    outfitIndex,
    setOutfitIndex,
    productList,
    setProductList,
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
}
