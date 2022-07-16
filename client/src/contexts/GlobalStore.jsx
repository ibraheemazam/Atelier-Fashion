import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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
    setProductInfo({
      id: 40348,
      campus: 'hr-rfp',
      name: 'Heir Force Ones',
      slogan: 'A sneaker dynasty',
      description:
        "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
      category: 'Kicks',
      default_price: '99.00',
      created_at: '2021-08-13T14:38:44.509Z',
      updated_at: '2021-08-13T14:38:44.509Z',
      features: [
        {
          feature: 'Sole',
          value: 'Rubber',
        },
        {
          feature: 'Material',
          value: 'FullControlSkin',
        },
        {
          feature: 'Mid-Sole',
          value: 'ControlSupport Arch Bridge',
        },
        {
          feature: 'Stitching',
          value: 'Double Stitch',
        },
      ],
    });
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
