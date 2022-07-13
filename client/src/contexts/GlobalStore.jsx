import React, { useState } from 'react';

export const GlobalContext = React.createContext();

export function useGlobalContext() {
  return React.useContext(GlobalContext);
}

// eslint-disable-next-line react/prop-types
export function GlobalContextProvider({ children }) {
  // will use API later to get information
  const [productID, setProductID] = useState(40348);
  const [productInfo, setProductInfo] = useState({
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
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [numQuestions, setNumQuestions] = useState(4);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
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
  };
  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
}
