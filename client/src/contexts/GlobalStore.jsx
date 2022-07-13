import React, { useState } from 'react';

export const GlobalContext = React.createContext();

export function useGlobalContext() {
  return React.useContext(GlobalContext);
}

// eslint-disable-next-line react/prop-types
export function GlobalContextProvider({ children }) {
  // will use API later to get information
  const [productID, setProductID] = useState(40348);
  const [questions, setQuestions] = useState([]);
  const [numQuestions, setNumQuestions] = useState(4);
  const [outfits, setOutfits] = useState([]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    productID,
    setProductID,
    questions,
    setQuestions,
    numQuestions,
    setNumQuestions,
    outfits,
    setOutfits,
  };
  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
}
