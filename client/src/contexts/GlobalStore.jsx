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

  const [productID, setProductID] = useState(40351);
  const [productInfo, setProductInfo] = useState({});
  const [styles, setStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState({});

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

    getProductInfo();
  }, [productID]);

  const value = {
    productID,
    setProductID,
    productInfo,
    setProductInfo,
    styles,
    setStyles,
    selectedStyle,
    setSelectedStyle,
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
